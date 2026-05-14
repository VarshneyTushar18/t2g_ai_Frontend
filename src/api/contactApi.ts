/** Base URL for the Node lead API (no trailing slash). */
function apiBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_API_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  // Dev: same-origin `/api/...` is proxied by Vite to the backend (vite.config.js).
  if (import.meta.env.DEV) {
    return "";
  }
  return "http://localhost:5001";
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
