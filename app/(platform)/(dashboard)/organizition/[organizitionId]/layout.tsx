import { OrgControl } from "./_components/org-control";

const OrganizitionIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizitionIdLayout;
