import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full h-14 fixed top-0 px-5 border-b shadow-sm bg-white">
      <div className="flex items-center justify-between w-full md:max-w-screen-xl mx-auto">
        <Logo />
        <div className="flex items-center justify-between space-x-5">
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:flex">
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
