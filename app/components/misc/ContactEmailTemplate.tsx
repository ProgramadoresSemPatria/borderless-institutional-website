import { ContactFormData } from "@/app/[locale]/(subpages)/contact/schema/useContactFormSchema";

export function ContactEmailTemplate({
  message,
  name,
  email,
  topic,
}: ContactFormData) {
  return (
    <div>
      <h1>Borderless Coding</h1>
      <p>
        <strong>Message from:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Topic:</strong> {topic}
      </p>
      <p>{message}</p>
    </div>
  );
}
