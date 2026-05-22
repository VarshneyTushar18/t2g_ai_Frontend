import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function turnstileSiteKey(): string {
  return (
    import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ||
    import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim() ||
    ""
  );
}

export type TurnstileFieldRef = {
  getToken: () => string | null;
  reset: () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: (errorCode?: string) => void;
          retry?: "auto" | "never";
          "refresh-expired"?: "auto" | "manual" | "never";
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "flexible" | "compact";
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    ___turnstileOnload?: () => void;
  }
}

let scriptLoadPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
  const siteKey = turnstileSiteKey();
  if (!siteKey) return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="turnstile/v0/api.js"]',
    );
    if (existing && window.turnstile) {
      resolve();
      return;
    }

    window.___turnstileOnload = () => resolve();
    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=___turnstileOnload";
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Failed to load Turnstile"));
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
}

export function isTurnstileEnabled(): boolean {
  return Boolean(turnstileSiteKey());
}

type TurnstileFieldProps = {
  onTokenChange?: () => void;
  className?: string;
};

export const TurnstileField = forwardRef<TurnstileFieldRef, TurnstileFieldProps>(
  function TurnstileField({ onTokenChange, className = "" }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const tokenRef = useRef<string | null>(null);
    const onTokenChangeRef = useRef(onTokenChange);
    const [widgetError, setWidgetError] = useState<string | null>(null);

    onTokenChangeRef.current = onTokenChange;

    useImperativeHandle(ref, () => ({
      getToken: () => tokenRef.current,
      reset: () => {
        tokenRef.current = null;
        setWidgetError(null);
        if (widgetIdRef.current) {
          window.turnstile?.reset(widgetIdRef.current);
        }
      },
    }));

    useEffect(() => {
      const siteKey = turnstileSiteKey();
      if (!siteKey || !containerRef.current) return;

      let cancelled = false;

      loadTurnstileScript()
        .then(() => {
          if (cancelled || !containerRef.current || !window.turnstile) return;

          widgetIdRef.current = window.turnstile.render(containerRef.current!, {
            sitekey: siteKey,
            theme: "light",
            size: "flexible",
            retry: "auto",
            "refresh-expired": "auto",
            callback: (token) => {
              tokenRef.current = token;
              setWidgetError(null);
              onTokenChangeRef.current?.();
            },
            "expired-callback": () => {
              tokenRef.current = null;
              onTokenChangeRef.current?.();
            },
            "error-callback": (code) => {
              tokenRef.current = null;
              console.error("[turnstile] error", code);
              setWidgetError(
                "Captcha verification failed. If this keeps happening, add this site’s hostname in Cloudflare Turnstile (Hostname Management), or use the test keys from .env.example for local dev.",
              );
            },
          });
        })
        .catch((err) => {
          console.error("[turnstile]", err);
          setWidgetError("Could not load captcha. Check your network or ad blockers.");
        });

      return () => {
        cancelled = true;
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      };
    }, []);

    if (!turnstileSiteKey()) return null;

    return (
      <div className={`w-full mb-7 ${className}`.trim()}>
        <div
          ref={containerRef}
          className="turnstile-field w-full min-h-[65px] rounded-lg"
          style={{
            border: "1px solid rgba(0,0,0,0.12)",
            background: "#ffffff",
          }}
          aria-label="Captcha verification"
        />
        {widgetError && (
          <p className="text-xs text-red-500 mt-2">{widgetError}</p>
        )}
      </div>
    );
  },
);
