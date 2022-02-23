import { UserOutlined } from "@ant-design/icons";
import routes from "asset/constants/routes";
import ContentWrapper from "components/UI/contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-12 shadow-md bg-gradient-to-bl from-p-primary to-p-secondary">
      <ContentWrapper>
        <div className="container flex items-center justify-between h-full mx-auto text-white ">
          <h1 className="mb-0 text-lg text-inherit">پاراکلینیک</h1>
          <Link to={routes.dashboard.path}>
            <div className="flex items-center px-4 py-1 rounded-full cursor-pointer gap-x-2 bg-white/10 hover:bg-white/20">
              <UserOutlined />
              داشبورد
            </div>
          </Link>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Navbar;
