const { createSlice } = require("@reduxjs/toolkit");

const initialState = { paraclinicTypes: null, selectedParaclinicType: null };

export const globalInfoReducer = createSlice({
  name: "globalInfo",
  initialState,
  reducers: {
    setParaclinicTypes: (state, { payload }) => {
      state.paraclinicTypes = payload;
    },
    setSelectedParaclinicType: (state, { payload }) => {
      state.selectedParaclinicType = payload;
    },
  },
});

export const { setParaclinicTypes, setSelectedParaclinicType } =
  globalInfoReducer.actions;
export default globalInfoReducer.reducer;
