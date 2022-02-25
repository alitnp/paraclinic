import { getFormattedDate } from "asset/helpers/getFormattedDate";
import ShowInfo from "components/UI/showInfo/ShowInfo";
import { useSelector } from "react-redux";

const CheckoutInfo = () => {
  //states
  const { checkoutInfo } = useSelector((state) => state.epresc);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
      <ShowInfo
        right="تاریخ ثبت"
        left={getFormattedDate(checkoutInfo?.createdAt)}
      />
      <ShowInfo
        right="تاریخ نسخه"
        left={getFormattedDate(checkoutInfo?.prescDate)}
      />
      <ShowInfo right="شماره نسخه" left={checkoutInfo?.prescriptionId} />
      <ShowInfo right="شماره ثبت" left={checkoutInfo?.requestId} />
      <ShowInfo right="نام بیمار" left={checkoutInfo?.patientFullName} />
      <ShowInfo right="شماره همراه بیمار" left={checkoutInfo?.patientMobile} />
      <ShowInfo right="کد ملی بیمار" left={checkoutInfo?.patientNationalId} />
      <ShowInfo right="نام پزشک" left={checkoutInfo?.doctorFullName} />
      <ShowInfo right="کد ملی پزشک" left={checkoutInfo?.doctorNationalId} />
      <ShowInfo
        right="تخصص پزشک"
        left={checkoutInfo?.response?.data?.Data?.DOC_SPEC_DESC}
      />
    </div>
  );
};

export default CheckoutInfo;
