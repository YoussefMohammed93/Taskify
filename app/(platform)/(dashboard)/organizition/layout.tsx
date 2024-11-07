import { Sidebar } from "../_components/sidebar";

const OrganizitionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-6xl 2xl:max-w-screen-xl mx-auto pt-20 md:pt-24 px-5">
      <div className="flex gap-x-8">
        <div className="w-64 hidden md:block shrink-0">
          <Sidebar storageKey="t-sidebar-state" />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizitionLayout;
