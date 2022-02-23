import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import routes from "asset/constants/routes";
import Home from "components/Pages/home/Home";
import Login from "components/Pages/login/Login";
import Navbar from "components/UI/navbar/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashboardLayout from "components/Pages/dashboard/dashboardLayout/DashboardLayout";
import MainPage from "components/Pages/dashboard/mainPage/MainPage";
import TestPage from "components/Pages/dashboard/TestPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={routes.home.path} element={<Home />} />
          <Route path={routes.login.path} element={<Login />} />
          <Route
            path={routes.dashboard.path}
            element={
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            }
          >
            <Route path={routes.dashboard.path} element={<MainPage />} />
            <Route
              path={routes.dashboard.path + "/test"}
              element={<TestPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer rtl position="top-right" pauseOnFocusLoss={false} />
    </>
  );
}

export default App;
