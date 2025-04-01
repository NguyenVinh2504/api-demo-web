import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./components/Header";
import AppSidebar from "./components/AppSidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Header />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}

export default MainLayout;
