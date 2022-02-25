import endpointUrls from "asset/constants/endpointUrls";
import AddDetail from "components/Pages/dashboard/paperPrescription/components/AddDetail";
import ServicesTable from "components/Pages/dashboard/paperPrescription/components/ServicesTable";
import Button from "components/UI/button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPprescLoading } from "redux/reducers/pprescReducer/pprescReducer";
import apiServices from "services/apiServices";

const PrescDetail = ({ next, back }) => {
  //state
  const [showAdd, setShowAdd] = useState(false);
  const { selectedParaclinicType } = useSelector((state) => state.globalInfo);
  const { prescDetail, prescInfo, loading, prescDate } = useSelector(
    (state) => state.ppresc
  );

  //dispatch
  const dispatch = useDispatch();

  //functions
  const toggleAdd = () => {
    if (loading) return;
    setShowAdd((prevState) => !prevState);
  };
  const handleSubmit = async () => {
    if (!prescDetail || prescDetail?.length === 0) return;
    console.log(prescDetail);
    console.log(prescInfo);
    const body = {
      ...prescInfo,
      details: prescDetail.map((item) => ({
        par_taref_code: item.TAREF_CODE,
        request_qty: item.request_qty,
      })),
      parTypeCode: selectedParaclinicType,
      presc_Date: prescDate,
    };
    dispatch(setPprescLoading(true));
    const result = await apiServices.post(endpointUrls.postPpresc, body);
    dispatch(setPprescLoading(false));
    if (result.isSuccess) next();
  };

  return (
    <div className="">
      <p
        className="text-base font-medium cursor-pointer text-p-primary hover:underline"
        onClick={toggleAdd}
      >
        + افزودن خدمات به نسخه
      </p>
      <AddDetail close={toggleAdd} visible={showAdd} />
      <ServicesTable />
      <div className="flex justify-between pt-4 mt-4 border-t col-span-full">
        <Button onClick={back} loading={loading}>
          بازگشت
        </Button>
        <Button type="primary" onClick={handleSubmit} loading={loading}>
          ثبت
        </Button>
      </div>
    </div>
  );
};

export default PrescDetail;
