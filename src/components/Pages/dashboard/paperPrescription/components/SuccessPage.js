import { CheckCircleFilled } from "@ant-design/icons";
import routes from "asset/constants/routes";
import { getFormattedDate } from "asset/helpers/getFormattedDate";
import Button from "components/UI/button/Button";
import FormWrapper from "components/UI/FormWrapper/FormWrapper";
import ShowInfo from "components/UI/showInfo/ShowInfo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuccessPage = ({ resestForm }) => {
  //state
  const { prescDetail, prescInfo, prescDate } = useSelector(
    (state) => state.ppresc
  );
  console.log(prescInfo);
  return (
    <div className="">
      <div className="text-center ">
        <p className="mb-6 text-center text-7xl md:text-9xl text-p-success">
          <CheckCircleFilled />
        </p>
        <p className="text-base font-bold">نسخه کاغذی با موفقیت ثبت شد.</p>
        <p className="">
          شما میتوانید از قسمت
          <span className="mx-1 text-p-primary">
            <Link to={routes.electronicPrescription.path}>
              « نسخه الکترونیکی »
            </Link>
          </span>
          اقدام به نسخه پیچی کنید.
        </p>
        <Button onClick={resestForm}>ثبت نسخه جدید</Button>
      </div>
      <div className="pt-6 mt-6 border-t">
        <FormWrapper>
          <ShowInfo right="تاریخ نسخه" left={getFormattedDate(prescDate)} />
          <ShowInfo right="شماره ملی بیمار" left={prescInfo?.nationalCode} />
          <ShowInfo
            right="شماره همراه بیمار"
            left={prescInfo?.patient_mobile}
          />
          <ShowInfo right="شماره بیمه بیمار" left={prescInfo?.bletSerial} />
          <ShowInfo right="نام پزشک" left={prescInfo?.doc_name} />
          <ShowInfo right="کد نظام پزشکی" left={prescInfo?.doc_mdid} />
          <ShowInfo right="تخصص پزشک" left={prescInfo?.profession} />
        </FormWrapper>
      </div>
    </div>
  );
};

export default SuccessPage;
