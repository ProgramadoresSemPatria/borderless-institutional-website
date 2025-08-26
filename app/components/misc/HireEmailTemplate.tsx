import { HireFormData } from "@/app/[locale]/(subpages)/want-to-hire/schemas/useHireFormSchema";

export function HireEmailTemplate({
  name,
  company,
  needs,
  desiredSalary,
  email,
  comments,
}: HireFormData) {
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
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Needs:</strong> {needs}
      </p>
      <p>
        <strong>Desired salary:</strong> {desiredSalary}
      </p>
      <p>
        <strong>Comments:</strong> {comments}
      </p>
    </div>
  );
}
