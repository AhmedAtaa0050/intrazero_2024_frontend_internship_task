import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";

function Layout() {
  return (
    <div className="h-screen grid grid-cols-[260px,1fr] grid-rows-[auto,1fr]">
      <Header />
      <Aside />
      <main className="pt-[40px] pb-[48px] px-[64px] bg-[#111827] overflow-auto">
        <div className="p-4 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
