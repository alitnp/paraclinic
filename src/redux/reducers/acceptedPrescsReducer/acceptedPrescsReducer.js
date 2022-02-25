const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  list: null,
  pageNumber: 1,
  pageSize: 15,
};

export const acceptedPrescsReducer = createSlice({
  name: "acceptedPrescs",
  initialState,
  reducers: {
    setAcceptedPrescsLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setAcceptedPresctList: (state, { payload }) => {
      state.list = payload;
    },
    setAcceptedPrescsPageNumber: (state, { payload }) => {
      state.pageNumber = payload;
    },
    setAcceptedPrescsPageSize: (state, { payload }) => {
      state.pageSize = payload;
    },
  },
});

export const {
  setAcceptedPrescsLoading,
  setAcceptedPresctList,
  setAcceptedPrescsPageNumber,
  setAcceptedPrescsPageSize,
} = acceptedPrescsReducer.actions;
export default acceptedPrescsReducer.reducer;
