import { Plus } from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobile-sidebar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full h-14 fixed top-0 z-50 px-5 border-b shadow-sm bg-white">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="hidden md:block h-auto rounded-sm px-2 py-1.5"
        >
          Create
        </Button>
        <Button size="sm" className="block md:hidden rounded-sm">
          <Plus className="size-5" />
        </Button>
      </div>
      <div className="flex items-center ml-auto gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterLeaveOrganizationUrl="/select-org"
          afterCreateOrganizationUrl="/organizition/:id"
          afterSelectOrganizationUrl="/organizition/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                width: 32,
                height: 32,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
