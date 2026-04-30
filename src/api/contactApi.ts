export async function submitContactForm(form: any) {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to send message");
  }

  return data;
}