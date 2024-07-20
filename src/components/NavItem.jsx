import { NavLink } from "react-router-dom";

function NavItem({ to, label, icon: Icon, isActive }) {
  return (
    <li
      className={` 
        ${isActive ? "text-[#f3f4f6] bg-[#111827] rounded-[5px]" : ""}
        group 
        hover:text-[#f3f4f6] hover:bg-[#111827] hover:rounded-[5px]
        py-[12px] transition duration-300 px-[24px] flex items-center gap-[12px] text-[#d1d5db] text-[16px] font-medium
      `}
    >
      <Icon
        className={`size-[24px] transition duration-300 group-hover:text-[#4f46e5]
        ${isActive ? "text-[#4f46e5]" : "text-[#6b7280]"}
      `}
      />
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
}

export default NavItem;
