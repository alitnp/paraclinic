const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  prescDate: Date.now(),
  prescInfo: null,
  prescDetail: [],
};

export const pprescReducer = createSlice({
  name: "ppresc",
  initialState,
  reducers: {
    setPprescLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setPprescInfo: (state, { payload }) => {
      state.prescInfo = payload;
    },
    setPprescDate: (state, { payload }) => {
      state.prescDate = payload;
    },
    setPprescDetail: (state, { payload }) => {
      state.prescDetail = payload;
    },
    pprescReset: (state) => {
      state.loading = false;
      state.prescDate = Date.now();
      state.prescInfo = null;
      state.prescDetail = [];
    },
  },
});

export const {
  setPprescLoading,
  setPprescInfo,
  setPprescDate,
  setPprescDetail,
  pprescReset,
} = pprescReducer.actions;
export default pprescReducer.reducer;
