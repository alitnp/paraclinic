import { CheckCircleFilled } from "@ant-design/icons";
import CheckoutInfo from "components/Pages/dashboard/electronicPrescription/components/CheckoutInfo";
import CheckoutTable from "components/Pages/dashboard/electronicPrescription/components/CheckoutTable";
import Button from "components/UI/button/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcceptedPrescriptions } from "redux/middlewares/epresc/getAcceptedPriscriptions";

const Checkout = ({ resetForm }) => {
  //states
  const { checkoutInfo } = useSelector((state) => state.epresc);
  console.log(checkoutInfo);

  //hooks
  const dispatch = useDispatch();

  //functions
  const print = () => {
    window.scrollTo(0, 0);
    window.print();
  };

  //effects
  useEffect(() => {
    //update list of accepted priscriptions
    dispatch(getAcceptedPrescriptions());
  }, []);

  return (
    <div className="">
      <p className="flex items-center mb-2 font-bold border-b gap-x-2">
        <span className="pb-1 text-p-success">
          <CheckCircleFilled />
        </span>
        نسخه با موفقیت ثبت شد.
      </p>
      <div className="printable">
        <CheckoutInfo />
        <CheckoutTable />
      </div>
      <div className="flex justify-between pt-4 mt-4 border-t">
        <Button onClick={resetForm}>بازگشت</Button>
        <Button onClick={print} type="primary">
          پرینت
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
