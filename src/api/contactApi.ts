/** Base URL for the lead API (no trailing slash). Set `VITE_API_URL` at build time for production when the API is not same-origin. */
function apiBaseUrl(): string {
  let raw = import.meta.env.VITE_API_URL?.trim() ?? "";
  // Production builds must not use localhost — that targets each visitor's machine, not your server.
  if (!import.meta.env.DEV && raw && /\blocalhost\b|127\.0\.0\.1/i.test(raw)) {
    raw = "";
  }
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  if (import.meta.env.DEV) {
    return "";
  }
  return "";
}

export async function submitContactForm(form: Record<string, unknown>) {
  const base = apiBaseUrl();
  const url = `${base}/api/contact`;

  const payload = {
    ...form,
    ...(typeof window !== "undefined" && window.location?.href
      ? { source_page: window.location.href }
      : {}),
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data: { message?: string; success?: boolean } = {};
  const text = await response.text();
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(
      response.ok
        ? "Invalid response from server"
        : `Server error (${response.status}). Is the API running? Tried: ${url || "(same-origin /api/contact)"}`,
    );
  }

  if (!response.ok) {
    throw new Error(data?.message || "Failed to send message");
  }

  return data;
}
