"use client";

import { cn } from "@/lib/utils";
import {
  BookOpenTextIcon,
  CircleUserIcon,
  HospitalIcon, UsersIcon
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";

const menuItems: { title: string; url: string; icon?: typeof UsersIcon }[] = [
  {
    title: "Quotes",
    url: "/quotes",
    icon: BookOpenTextIcon,
  },
  {
    title: "Random User",
    url: "/random-user",
    icon: CircleUserIcon,
  },
  {
    title: "Covid Stats",
    url: "/covid-stats",
    icon: HospitalIcon,
  },
];

export const AppSidebar: FC = () => {
  const pathname = usePathname();
  const sidebarContext = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b">
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold">DataTrak</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="space-y-2 p-4">
          {menuItems.map((item, index) => (
            <SidebarMenuItem
              key={index}
              onClick={() => sidebarContext.setOpenMobile(false)}
            >
              <Link
                href={item.url}
                className={cn(
                  "flex items-center gap-4 p-2 rounded",
                  pathname === item.url && "bg-primary text-white font-medium",
                  "hover:bg-gray-100 hover:text-gray-800"
                )}
              >
                {item.icon && <item.icon size={18} />}
                <span className="text-sm">{item.title}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t text-sm text-gray-500">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Josef O. All rights reserved.
        </p>
      </SidebarFooter>
    </Sidebar>
  );
};
