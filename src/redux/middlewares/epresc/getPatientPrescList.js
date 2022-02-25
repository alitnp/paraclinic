import endpointUrls from "asset/constants/endpointUrls";
import {
  setEprescLoading,
  setPatientPrescList,
} from "redux/reducers/eprescReducer/eprescReducer";
import apiServices from "services/apiServices";

export const getPatientPrescList =
  (handleSuccess) => async (dispatch, getState) => {
    const { selectedParaclinicType } = getState().globalInfo;
    const { patientInfo } = getState().epresc;
    console.log(patientInfo);
    dispatch(setEprescLoading(true));

    const result = await apiServices.get(
      endpointUrls.getPatientPrescList +
        "?patientNationalId=" +
        patientInfo.nationalId +
        "&parTypeCode=" +
        selectedParaclinicType
    );
    console.log(result);
    dispatch(setEprescLoading(false));
    if (result.isSuccess) {
      dispatch(setPatientPrescList(result.data.data.Data));
      handleSuccess();
    }
  };
