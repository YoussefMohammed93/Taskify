import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizitionPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organizition/:id"
      afterCreateOrganizationUrl="/organizition/:id"
    />
  );
}
