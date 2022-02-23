import { CaretDownOutlined } from "@ant-design/icons";
import routes from "asset/constants/routes";
import ContentWrapper from "components/UI/contentWrapper/ContentWrapper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const items = [
  { name: "داشبورد", route: routes.dashboard.path },
  { name: "خرید های من", route: "/sdfs" },
  { name: "سفارش های من", route: "/sdfs" },
  { name: "محصولات من", route: "/sdfs" },
  { name: "ویرایش اطلاعات", route: "/sdfs" },
];

const DashboardLayout = ({ children }) => {
  //states
  const [open, setOpen] = useState(false);

  //hooks
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  //functions
  const toggle = () => setOpen((prevState) => !prevState);
  const logout = () => {};
  const navItems = () => (
    <>
      {items.map((item) => (
        <Link to={item.route} key={item.name}>
          <div
            className={` ${
              pathname === item.route
                ? "text-p-bg-color bg-white/20 opacity-100"
                : "text-p-gray opacity-60"
            } hover:text-white font-medium hover:opacity-100 transition-all cursor-pointer mx-2 rounded-md whitespace-nowrap px-3 text-center py-1 my-1 `}
          >
            {item.name}
          </div>
        </Link>
      ))}
      <p
        className={` text-p-bg-color bg-white/2 hover:text-white transition-all cursor-pointer mx-2 rounded-md whitespace-nowrap px-3 text-center py-1 my-1 mt-auto`}
        onClick={logout}
      >
        خروج
      </p>
    </>
  );

  return (
    <ContentWrapper>
      <div className="flex w-full min-h-[85vh]">
        <aside className="flex-col hidden w-32 py-2 my-4 ml-4 rounded-md md:flex bg-p-primary">
          {navItems()}
        </aside>
        <div className="w-full ">
          <div
            className={`md:hidden py-2 mt-4 rounded-md bg-p-primary transition-all overflow-hidden ${
              open ? "max-h-[500px]" : "max-h-[50px]"
            }`}
          >
            <p
              className="px-3 py-1 mx-2 my-1 mb-3 text-center rounded-md cursor-pointer text-p-bg-color hover:text-white whitespace-nowrap"
              onClick={toggle}
            >
              گزینه ها{" "}
              <CaretDownOutlined
                className={`mr-3 transition-all bottom-1 relative ${
                  open && "rotate-180"
                }`}
              />
            </p>
            {navItems()}
          </div>
          <div className="w-full min-h-[85vh] p-4 my-4 border rounded-md shadow-md">
            {children}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default DashboardLayout;
