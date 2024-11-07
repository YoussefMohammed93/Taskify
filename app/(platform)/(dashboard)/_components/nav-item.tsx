"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";

export type Organization = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
};

interface NavItemProps {
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="size-5 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="size-5 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="size-5 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="size-5 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-2 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition-all duration-150 text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="relative size-7">
            <Image
              fill
              src={organization.imageUrl}
              className="rounded-sm object-cover"
              alt="Organization"
            />
          </div>
          <span className="text-sm font-medium">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-neutral-700 pt-1">
        {routes.map((route, index) => (
          <Button
            size="sm"
            variant="ghost"
            key={route.href}
            onClick={() => handleClick(route.href)}
            className={cn(
              "w-full justify-start font-normal pl-10 my-1 border-b rounded-none",
              index === routes.length - 1 ? "border-b-0" : "",
              pathname === route.href && "bg-sky-500/10 text-sky-700"
            )}
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
