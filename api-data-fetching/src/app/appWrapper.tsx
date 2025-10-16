"use client";
import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReduxProvider } from "@/redux/provider";
import { FC, ReactNode } from "react";

export const AppWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full bg-gray-100">
          <AppHeader />
          {children}
        </main>
      </SidebarProvider>
    </ReduxProvider>
  );
};
