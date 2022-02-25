import BasicInfo from "components/Pages/dashboard/electronicPrescription/components/BasicInfo";
import Checkout from "components/Pages/dashboard/electronicPrescription/components/Checkout";
import PrescDetails from "components/Pages/dashboard/electronicPrescription/components/PrescDetail";
import PrescList from "components/Pages/dashboard/electronicPrescription/components/PrescList";
import PageTitle from "components/UI/pageTitle/PageTitle";
import Steps from "components/UI/Steps/Steps";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setEprescCheckoutInfo,
  setEprescDetail,
  setEprescPatientInfo,
  setPatientPrescList,
} from "redux/reducers/eprescReducer/eprescReducer";

const ElectronicPrescription = () => {
  //states
  const [step, setStep] = useState(0);
  const { checkoutInfo } = useSelector((state) => state.epresc);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    checkoutInfo && setStep(3);
  }, [checkoutInfo]);

  //functions
  const next = () => setStep((prevStep) => prevStep + 1);
  const back = () => setStep((prevStep) => prevStep - 1);
  const handleResetForm = () => {
    setStep(0);
    dispatch(setPatientPrescList(null));
    dispatch(setEprescDetail(null));
    dispatch(setEprescPatientInfo(null));
    dispatch(setEprescCheckoutInfo(null));
  };

  return (
    <div className="">
      <PageTitle title="ثبت نسخه الکترونیکی" />
      <Steps
        steps={[
          "دریافت اطلاعات",
          "لیست نسخ بیمار",
          "جزئیات نسخه",
          "جزئیات ثبت",
        ]}
        current={step}
      />
      <div className="pt-6 mt-6 border-t">
        {step === 0 && <BasicInfo next={next} />}
        {step === 1 && <PrescList next={next} back={back} />}
        {step === 2 && <PrescDetails next={next} back={back} />}
        {step === 3 && <Checkout resetForm={handleResetForm} />}
      </div>
    </div>
  );
};

export default ElectronicPrescription;
