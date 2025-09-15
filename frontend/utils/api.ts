const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getForm(slug: string) {
  if (!API_URL) throw new Error("API_URL is not defined");

  const res = await fetch(`${API_URL}/forms/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch form: ${res.status}`);

  return res.json();
}

const API_URL_BROWSER = process.env.NEXT_PUBLIC_API_URL_BROWSER;

export async function submitForm(slug: string, data: any) {
  if (!API_URL_BROWSER) throw new Error("API_URL_BROWSER is not defined");

  const res = await fetch(`${API_URL_BROWSER}/forms/${slug}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to submit form: ${res.status}`);

  return res.json();
}
