import endpointUrls from "asset/constants/endpointUrls";
import apiServices from "services/apiServices";
import {
  setServicesLoading,
  setServicesList,
} from "redux/reducers/servicesReducer/servicesReducer";

export const getServicesList = () => async (dispatch, getState) => {
  const { nameFilter, page, pageSize } = getState().services;
  const { selectedParaclinicType } = getState().globalInfo;

  dispatch(setServicesLoading(true));
  const result = await apiServices.get(endpointUrls.getServicesList, {
    page,
    limit: pageSize,
    PARTYPE_CODE: selectedParaclinicType,
    SERVICE_NAME: nameFilter,
  });
  dispatch(setServicesLoading(false));

  if (result.isSuccess) dispatch(setServicesList(result.data.data));
};
