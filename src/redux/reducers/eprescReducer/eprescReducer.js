const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  patientInfo: null,
  patientPrescList: null,
  selectedPresc: null,
  prescDetail: null,
  checkoutInfo: null,
  postingErrors: null,
};

export const eprescReducer = createSlice({
  name: "epresc",
  initialState,
  reducers: {
    setEprescLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setEprescPatientInfo: (state, { payload }) => {
      state.patientInfo = payload;
    },
    setPatientPrescList: (state, { payload }) => {
      state.patientPrescList = payload;
    },
    setEprescSelectedPresc: (state, { payload }) => {
      state.selectedPresc = payload;
    },
    setEprescDetail: (state, { payload }) => {
      state.prescDetail = payload;
    },
    detailAcceptedToggle: (state, { payload }) => {
      state.prescDetail.Details[payload].accepted =
        !state.prescDetail.Details[payload]?.accepted;
    },
    setEprescCheckoutInfo: (state, { payload }) => {
      state.checkoutInfo = payload;
    },
    setPostingErrors: (state, { payload }) => {
      state.postingErrors = payload;
    },
  },
});

export const {
  setEprescLoading,
  setEprescPatientInfo,
  setPatientPrescList,
  setEprescSelectedPresc,
  setEprescDetail,
  detailAcceptedToggle,
  setEprescCheckoutInfo,
  setPostingErrors,
} = eprescReducer.actions;
export default eprescReducer.reducer;
