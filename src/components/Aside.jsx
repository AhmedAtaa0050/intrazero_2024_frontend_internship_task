import {
  HiOutlineUsers,
  HiOutlineFilm,
  HiOutlineGlobe,
  HiOutlineCollection,
} from "react-icons/hi";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavItem from "./NavItem";

const navItems = [
  { to: "/", label: "Characters", icon: HiOutlineUsers, key: "characters" },
  { to: "/films", label: "Films", icon: HiOutlineFilm, key: "films" },
  { to: "/planets", label: "Planets", icon: HiOutlineGlobe, key: "planets" },
  {
    to: "/species",
    label: "Species",
    icon: HiOutlineCollection,
    key: "species",
  },
];

function Aside() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="bg-[#18212f] border-r border-[#1F294C] row-span-full py-[32px] px-[24px] flex flex-col gap-[32px]">
      <Logo />

      <nav>
        <ul className="flex flex-col gap-[8px]">
          {navItems.map(({ to, label, icon, key }) => (
            <NavItem
              key={key}
              to={to}
              label={label}
              icon={icon}
              isActive={currentPath === to}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
