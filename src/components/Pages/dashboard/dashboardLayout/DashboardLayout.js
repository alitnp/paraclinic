import routes from "asset/constants/routes";
import HorizentalSidebar from "components/Pages/dashboard/dashboardLayout/components/HorizentalSidebar";
import NavItem from "components/Pages/dashboard/dashboardLayout/components/NavItem";
import VerticalSidebar from "components/Pages/dashboard/dashboardLayout/components/VerticalSidebar";
import ContentWrapper from "components/UI/contentWrapper/ContentWrapper";

const items = [
  // { name: "داشبورد", route: routes.dashboard.path },
  // { name: "نسخه الکترونیک", route: routes.electronicPrescription.path },
  { name: "نسخه الکترونیک", route: routes.dashboard.path },
  { name: "نسخه کاغذی", route: routes.paperPrescription.path },
  { name: "لیست خدمات", route: routes.services.path },
  { name: "نسغ ثبت شده", route: routes.accepted.path },
];

const DashboardLayout = ({ children }) => {
  //functions
  const logout = () => {};
  const navItems = () => (
    <>
      {items.map((item) => (
        <NavItem name={item.name} key={item.name} route={item.route} />
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
      <div className="flex w-full min-h-[85vh] pt-14 ">
        <VerticalSidebar>{navItems()}</VerticalSidebar>
        <div className="w-full ">
          <HorizentalSidebar>{navItems()}</HorizentalSidebar>
          <div className="w-full min-h-[85vh] p-4 my-4 border rounded-md shadow-md bg-white">
            {children}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default DashboardLayout;
