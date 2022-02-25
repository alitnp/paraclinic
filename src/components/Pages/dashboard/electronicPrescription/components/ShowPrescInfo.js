import { getFormattedDate } from "asset/helpers/getFormattedDate";
import ShowInfo from "components/UI/showInfo/ShowInfo";
import { useSelector } from "react-redux";

const ShowPrescInfo = () => {
  const { selectedPresc, patientInfo } = useSelector((state) => state.epresc);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ShowInfo right="شماره نسخه" left={selectedPresc.EPRSC_ID} />
      <ShowInfo
        right="تاریخ نسخه"
        left={getFormattedDate(selectedPresc.PRESCDATE)}
      />
      <ShowInfo right="نام بیمار" left={patientInfo.firstName} />
      <ShowInfo right="نام خانوادگی بیمار" left={patientInfo.lastName} />
      <ShowInfo right="کد ملی بیمار" left={patientInfo.nationalId} />
      <ShowInfo
        right="تاریخ تولد بیمار"
        left={getFormattedDate(patientInfo.birthDate)}
      />
      <ShowInfo right="نام پزشک" left={selectedPresc.DOC_NAME} />
      <ShowInfo right="کد نظام پزشکی" left={selectedPresc.DOC_MDID} />
      <ShowInfo right="تخصص  پزشکی" left={selectedPresc.DOC_SPEC} />
      <ShowInfo right="نوع" left={selectedPresc.PARTYPEDESC} />
      <ShowInfo right="استان" left={selectedPresc.PROVINCE} />
    </div>
  );
};

export default ShowPrescInfo;
