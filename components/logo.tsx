import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 hover:opacity-80 duration-200 transition-all">
        <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        <p className="text-lg font-semibold text-neutral-800">Taskify</p>
      </div>
    </Link>
  );
};

export default Logo;
