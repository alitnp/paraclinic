const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  list: null,
  nameFilter: "",
  pageNumber: 1,
  pageSize: 15,
};

export const servicesReducer = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServicesLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setServicesList: (state, { payload }) => {
      state.list = payload;
    },
    setServicesNameFilter: (state, { payload }) => {
      state.nameFilter = payload;
    },
    setServicesPageNumber: (state, { payload }) => {
      state.pageNumber = payload;
    },
    setServicesPageSize: (state, { payload }) => {
      state.pageSize = payload;
    },
  },
});

export const {
  setServicesLoading,
  setServicesList,
  setServicesNameFilter,
  setServicesPageNumber,
  setServicesPageSize,
} = servicesReducer.actions;
export default servicesReducer.reducer;
