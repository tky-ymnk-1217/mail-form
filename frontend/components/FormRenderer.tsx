"use client";

import { useState } from "react";
import { submitForm } from "@/utils/api";
import FormField from "./FormField";

interface Field {
  id: number;
  label: string;
  type: string;
  required: boolean;
}

interface FormRendererProps {
  fields: Field[];
  slug: string;
}

export default function FormRenderer({ fields, slug }: FormRendererProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await submitForm(slug, data);
      alert(res.message);
      
      // 安全にリセット
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
    } catch (err: any) {
      alert(`送信に失敗しました: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((f) => (
        <FormField key={f.id} field={f} />
      ))}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "送信中..." : "送信"}
      </button>
    </form>
  );
}
