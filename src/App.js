import "styles/myAntStyles.css";
import "react-toastify/dist/ReactToastify.css";
import routes from "asset/constants/routes";
import Home from "components/Pages/home/Home";
import Login from "components/Pages/login/Login";
import Navbar from "components/UI/navbar/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DashboardLayout from "components/Pages/dashboard/dashboardLayout/DashboardLayout";
import MainPage from "components/Pages/dashboard/mainPage/MainPage";
import ElectronicPrescription from "components/Pages/dashboard/electronicPrescription/ElectronicPrescription";
import PaperPrescription from "components/Pages/dashboard/paperPrescription/PaperPrescription";
import Services from "components/Pages/dashboard/services/Services";
import Accepted from "components/Pages/dashboard/accepted/Accepted";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getParaclinicTypes } from "redux/middlewares/globalInfo/getParaclinicTypes";

function App() {
  //states
  const { paraclinicTypes } = useSelector((state) => state.globalInfo);

  //hooks
  const dispatch = useDispatch();

  useEffect(() => {
    !paraclinicTypes && dispatch(getParaclinicTypes());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
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
            <Route
              path={routes.dashboard.path}
              element={<ElectronicPrescription />}
            />

            <Route
              path={routes.paperPrescription.path}
              element={<PaperPrescription />}
            />
            <Route path={routes.services.path} element={<Services />} />
            <Route path={routes.accepted.path} element={<Accepted />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer rtl position="top-right" pauseOnFocusLoss={false} />
    </div>
  );
}

export default App;
