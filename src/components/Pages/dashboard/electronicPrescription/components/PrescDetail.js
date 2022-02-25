import PrescDetailTable from "components/Pages/dashboard/electronicPrescription/components/PrescDetailTable";
import ShowPrescInfo from "components/Pages/dashboard/electronicPrescription/components/ShowPrescInfo";
import Button from "components/UI/button/Button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPrescDetail } from "redux/middlewares/epresc/getPrescDetail";
import { postPrescription } from "redux/middlewares/epresc/postPrescription";
import {
  setEprescDetail,
  setEprescSelectedPresc,
} from "redux/reducers/eprescReducer/eprescReducer";

const PrescDetails = ({ back }) => {
  const { selectedPresc, loading, prescDetail } = useSelector(
    (state) => state.epresc
  );
  console.log(prescDetail);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !prescDetail && dispatch(getPrescDetail());
  }, []);

  //functions
  const handleSubmit = () => dispatch(postPrescription());
  const handleBack = () => {
    dispatch(setEprescSelectedPresc(null));
    dispatch(setEprescDetail(null));
    back();
  };

  return (
    <div className="">
      <div className="mb-4">
        <p className="pb-4 border-b">
          جزئیات نسخه انتخاب شده در جدول زیر آماده.
          <br />
          شما میتوانید در قسمت ویرایش اقدام به تغییر قیمت یا تعداد کنید. همچنین
          موارد ارائه شده را تایید کنید و گزینه ثبت را انتخاب کنید.
        </p>
        {selectedPresc && <ShowPrescInfo />}
        <PrescDetailTable />
        <div className="flex justify-between pt-4 mt-4 border-t">
          <Button loading={loading} onClick={handleBack}>
            بازگشت
          </Button>
          <Button type="primary" onClick={handleSubmit} loading={loading}>
            ثبت
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrescDetails;
