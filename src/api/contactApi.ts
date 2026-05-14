/** Base URL for the lead API (no trailing slash). Set `VITE_API_URL` in `.env`; in dev leave empty to use same-origin `/api` (Vite proxy). */
function apiBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_API_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
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
