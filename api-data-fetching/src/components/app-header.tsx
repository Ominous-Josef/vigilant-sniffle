"use client";

import Link from "next/link";
import { GithubIcon } from "./icons/github-icon";
import { SidebarTrigger } from "./ui/sidebar";

export const AppHeader = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto p-4 flex items-center justify-between gap-6">
        <SidebarTrigger />
        <h1 className="text-lg font-bold">API Data Fetching</h1>

        <Link
          href={
            "https://github.com/Ominous-Josef/vigilant-sniffle/blob/main/api-data-fetching/README.md"
          }
          target="_blank"
          className="bg-black p-2 rounded-full"
        >
          <GithubIcon className="size-4 text-gray-100" />
        </Link>
      </div>
    </header>
  );
};
