import ParaclinicType from "components/Pages/dashboard/paperPrescription/components/ParaclinicType";
import PrescDetail from "components/Pages/dashboard/paperPrescription/components/PrescDetail";
import PrescInfo from "components/Pages/dashboard/paperPrescription/components/PrescInfo";
import SuccessPage from "components/Pages/dashboard/paperPrescription/components/SuccessPage";
import PageTitle from "components/UI/pageTitle/PageTitle";
import Steps from "components/UI/Steps/Steps";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { pprescReset } from "redux/reducers/pprescReducer/pprescReducer";

const PaperPrescription = () => {
  //states
  const [step, setStep] = useState(0);

  //hooks
  const dispatch = useDispatch();

  //functions
  const next = () => setStep((prevStep) => prevStep + 1);
  const back = () => setStep((prevStep) => prevStep - 1);
  const resestForm = () => {
    dispatch(pprescReset(pprescReset()));
    setStep(0);
  };

  return (
    <div className="">
      <PageTitle title="ثبت نسخه کاغذی" />
      <Steps
        steps={["نوع پاراکلینیک", "اطلاعات نسخه", "اختصاص خدمات", "ثبت نهایی"]}
        current={step}
      />
      <div className="pt-6 mt-6 border-t">
        {step === 0 && <ParaclinicType next={next} />}
        {step === 1 && <PrescInfo next={next} back={back} />}
        {step === 2 && <PrescDetail next={next} back={back} />}
        {step === 3 && <SuccessPage resestForm={resestForm} />}
      </div>
    </div>
  );
};

export default PaperPrescription;
