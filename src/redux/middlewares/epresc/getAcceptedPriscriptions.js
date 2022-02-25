import endpointUrls from "asset/constants/endpointUrls";
import {
  setAcceptedPrescsLoading,
  setAcceptedPresctList,
} from "redux/reducers/acceptedPrescsReducer/acceptedPrescsReducer";
import apiServices from "services/apiServices";

export const getAcceptedPrescriptions = () => async (dispatch, getState) => {
  const { pageNumber, pageSize } = getState().acceptedPrescs;

  dispatch(setAcceptedPrescsLoading(true));
  const result = await apiServices.get(endpointUrls.getAcceptedPrescriptions, {
    page: pageNumber,
    limit: pageSize,
  });
  dispatch(setAcceptedPrescsLoading(false));
  if (result.isSuccess) dispatch(setAcceptedPresctList(result.data.data));
};
