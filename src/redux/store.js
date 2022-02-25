import { configureStore } from "@reduxjs/toolkit";
import epresc from "redux/reducers/eprescReducer/eprescReducer";
import ppresc from "redux/reducers/pprescReducer/pprescReducer";
import globalInfo from "redux/reducers/globalInfoReducer/globalInfoReducer";
import services from "redux/reducers/servicesReducer/servicesReducer";
import acceptedPrescs from "redux/reducers/acceptedPrescsReducer/acceptedPrescsReducer";

export const store = configureStore({
  reducer: { globalInfo, epresc, ppresc, services, acceptedPrescs },
});
