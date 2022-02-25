import endpointUrls from "asset/constants/endpointUrls";
import { englishNum } from "asset/helpers/persianTools";
import { toast } from "react-toastify";
import {
  setEprescLoading,
  setPostingErrors,
  setEprescCheckoutInfo,
} from "redux/reducers/eprescReducer/eprescReducer";
import apiServices from "services/apiServices";

export const postPrescription = () => async (dispatch, getState) => {
  const { prescDetail, patientInfo, selectedPresc } = getState().epresc;
  const { selectedParaclinicType } = getState().globalInfo;
  console.log(patientInfo, selectedPresc);
  const nothingIsAccepted = prescDetail.Details.every((item) => !item.accepted);
  if (nothingIsAccepted) return toast.warning("هیچ کدام از موارد انتخاب نشده.");
  const isAnyWithoutPrice = prescDetail.Details.some(
    (item) =>
      item.accepted && (item.taref_price === 0 || item.taref_price === "0")
  );
  if (isAnyWithoutPrice)
    return toast.warning(
      "دقت کنید برای تمام موارد تایید شده، قیمت تعیین شده باشد."
    );

  const body = {
    eprsc_id: selectedPresc.EPRSC_ID,
    parTypeCode: selectedParaclinicType,
    nationalCode: patientInfo.nationalId,
    doc_mdid: selectedPresc.DOC_MDID,
    tech_mdid: "",
    patientFullName: selectedPresc.DOC_NAME,
    prescDate: selectedPresc.PRESCDATE,
    patient_mobile: selectedPresc.PATIENT_MOBILE,
    tech_price: 0,
    token: "",
    details: prescDetail.Details.map((item) => ({
      accepted: item.accepted,
      par_taref_code: item.PAR_TAREF_CODE,
      par_taref_price: item.PAR_TAREF_PRICE,
      taref_price: englishNum(item.taref_price),
      taref_techprice: 0,
      request_qty: item.REQUEST_QTY,
      is2k: false,
      spiral: false,
    })),
  };
  console.log(body);
  dispatch(setEprescLoading(true));
  const result = await apiServices.post(
    endpointUrls.postPresctiption,
    body,
    {},
    true
  );
  dispatch(setEprescLoading(false));
  console.log(result);
  if (!result.isSuccess) {
    dispatch(setPostingErrors(result.error));
  } else {
    dispatch(setEprescCheckoutInfo(result.data.data));
  }
};
