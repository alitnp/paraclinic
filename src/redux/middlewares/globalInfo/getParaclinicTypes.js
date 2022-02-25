import endpointUrls from "asset/constants/endpointUrls";
import {
  setParaclinicTypes,
  setSelectedParaclinicType,
} from "redux/reducers/globalInfoReducer/globalInfoReducer";
import apiServices from "services/apiServices";

export const getParaclinicTypes = () => async (dispatch) => {
  const result = await apiServices.get(endpointUrls.getParaclinicTypes);
  if (result.isSuccess) {
    dispatch(setSelectedParaclinicType(result.data.data[0].ParTypeCode));
    dispatch(setParaclinicTypes(result.data.data));
  }
};
