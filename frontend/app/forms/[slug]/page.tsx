import FormRenderer from "@/components/FormRenderer";
import { getForm } from "@/utils/api";

interface PageProps {
  params: { slug: string };
}

export default async function FormPage({ params }: PageProps) {
  const form = await getForm(params.slug);

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{form.title}</h1>
      <p className="mb-6 text-gray-600">{form.description}</p>
      {/* FormRenderer に渡すのはデータだけ */}
      <FormRenderer fields={form.fields} slug={form.slug} />
    </main>
  );
}
