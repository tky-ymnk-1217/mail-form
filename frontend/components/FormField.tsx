interface FieldProps {
  field: {
    id: number;
    label: string;
    type: string;
    required: boolean;
  };
}

export default function FormField({ field }: FieldProps) {
  switch (field.type) {
    case "text":
    case "email":
      return (
        <input
          name={field.label}
          placeholder={field.label}
          required={field.required}
          className="border p-2 w-full"
        />
      );
    case "textarea":
      return (
        <textarea
          name={field.label}
          placeholder={field.label}
          required={field.required}
          className="border p-2 w-full"
        />
      );
    default:
      return null;
  }
}
