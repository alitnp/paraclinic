import endpointUrls from "asset/constants/endpointUrls";
import { toast } from "react-toastify";
import { getPatientPrescList } from "redux/middlewares/epresc/getPatientPrescList";
import {
  setEprescLoading,
  setEprescPatientInfo,
} from "redux/reducers/eprescReducer/eprescReducer";
import apiServices from "services/apiServices";

export const checkEstehghagh = (id, handleSuccess) => async (dispatch) => {
  dispatch(setEprescLoading(true));
  const result = await apiServices.get(
    endpointUrls.estehghagh + "?patientNationalId=" + id
  );
  dispatch(setEprescLoading(false));
  console.log(result);
  if (result.data.data.hasHealthDeserve) {
    dispatch(
      setEprescPatientInfo({
        nationalId: id,
        ...result.data.data,
      })
    );
    dispatch(getPatientPrescList(handleSuccess));
  } else {
    toast.warning("کد ملی وارد شده شامل بیمه نمیباشد.");
  }
};
