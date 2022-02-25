import { Link, useLocation } from "react-router-dom";

const NavItem = ({ route, name }) => {
  //hooks
  const { pathname } = useLocation();

  return (
    <Link to={route} key={name}>
      <div
        className={` ${
          pathname === route
            ? "text-p-bg-color bg-white/20 opacity-100"
            : "text-p-gray font-normal opacity-60"
        } hover:text-white font-medium hover:opacity-100 transition-all cursor-pointer mx-2 rounded-md whitespace-nowrap px-3 text-center py-1 my-1 `}
      >
        {name}
      </div>
    </Link>
  );
};

export default NavItem;
