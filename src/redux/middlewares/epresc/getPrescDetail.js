import endpointUrls from "asset/constants/endpointUrls";
import {
  setEprescDetail,
  setEprescLoading,
} from "redux/reducers/eprescReducer/eprescReducer";
import apiServices from "services/apiServices";

export const getPrescDetail = () => async (dispatch, getState) => {
  const { selectedPresc } = getState().epresc;
  const { selectedParaclinicType } = getState().globalInfo;
  dispatch(setEprescLoading(true));
  const result = await apiServices.get(endpointUrls.getEprescDetail, {
    ParTypeCode: selectedParaclinicType,
    RequestID: selectedPresc.EPRSC_ID,
  });
  dispatch(setEprescLoading(false));
  if (result.isSuccess)
    dispatch(
      setEprescDetail({
        ...result.data.data.Data,
        Details: result.data.data.Data.Details.map((item) => ({
          ...item,
          accepted: false,
          taref_price: item.PAR_TAREF_PRICE,
        })),
      })
    );
};
