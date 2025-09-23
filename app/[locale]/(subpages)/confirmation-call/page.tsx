import ConfirmationCallPage from "@/app/components/sections/confirmation-call/ConfirmationCallPage";

export default async function Page(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams: Record<string, string | string[] | undefined> =
    (await props.searchParams) ?? {};

  return <ConfirmationCallPage searchParams={searchParams} />;
}
