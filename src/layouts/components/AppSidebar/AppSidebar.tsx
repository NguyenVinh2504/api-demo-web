import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { paths } from "@/routes/path";

import { Home, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: paths.home,
    icon: Home,
    isActive: true,
  },
  {
    title: "Search",
    url: paths.search,
    icon: Search,
  },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroup className="flex-row items-center h-11 relative">
          <SidebarTrigger className="[&_svg]:!size-5.5" />
          <h1 className="text-2xl font-semibold tracking-tight absolute  left-1/2 -translate-x-1/2">
            APIDemoLab
          </h1>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <NavLink to={item.url} key={item.title} end>
                {({ isActive }) => (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="p-3 h-[initial]"
                    >
                      <div>
                        <item.icon />
                        <span>{item.title}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </NavLink>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
