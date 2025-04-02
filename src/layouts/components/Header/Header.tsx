import SearchInput from "@/components/SearchInput";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
// import { useState } from "react";
function Header() {
  const { open } = useSidebar();

  return (
    <div className="h-16 border-b-2 w-full flex items-center gap-3 px-3 sticky top-0 bg-background z-[9999]">
      {!open && <SidebarTrigger className="[&>svg]:!size-5.5" />}
      {!open && (
        <h1 className="text-2xl font-semibold tracking-tight">APIDemoLab</h1>
      )}
      <SearchInput
        placeholder="Search"
        className="max-w-96 absolute left-1/2 -translate-x-1/2"
      />
    </div>
  );
}

export default Header;
