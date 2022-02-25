import { getFormattedDate } from "asset/helpers/getFormattedDate";
import Button from "components/UI/button/Button";
import FormWrapper from "components/UI/FormWrapper/FormWrapper";
import ShowInfo from "components/UI/showInfo/ShowInfo";
import Table from "components/UI/table/Table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setEprescSelectedPresc,
  setPatientPrescList,
} from "redux/reducers/eprescReducer/eprescReducer";

const PrescList = ({ next, back }) => {
  //states
  const { patientPrescList, patientInfo } = useSelector(
    (state) => state.epresc
  );

  //hooks
  const dispatch = useDispatch();

  //functions
  const handlePrestSelect = (presc) => {
    dispatch(setEprescSelectedPresc(presc));
    next();
  };
  const handleBack = () => {
    dispatch(setPatientPrescList(null));
    back();
  };

  //constants
  const columns = [
    {
      title: "ردیف",
      key: "index",
      dataIndex: "index",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "تاریخ تجویز",
      key: "PRESCDATE",
      dataIndex: "PRESCDATE",
      render: (text) => getFormattedDate(text),
    },
    {
      title: "نام پزشک",
      key: "DOC_NAME",
      dataIndex: "DOC_NAME",
    },
    {
      title: "تخصص پزشک",
      key: "DOC_SPEC",
      dataIndex: "DOC_SPEC",
    },
    {
      title: "شماره نسخه",
      key: "EPRSC_ID",
      dataIndex: "EPRSC_ID",
    },
    {
      title: "انتخاب نسخه",
      key: "select",
      dataIndex: "select",
      render: (_text, record) => {
        return (
          <div className="flex justify-center">
            <Button>انتخاب</Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="">
      <div className="mb-4 border-b">
        <p className="pb-4 border-b">
          لیست نسخه هایی که به بیمار مورد نظر اختصاص یافته و هنوز پیچیده نشده.{" "}
          در صورتی که جدول زیر خالی می‌باشد، نسخه ای برای این کد ملی ثبت نشده.
        </p>
        <FormWrapper>
          <ShowInfo right="نام" left={patientInfo.firstName} />
          <ShowInfo right="نام خانوادگی" left={patientInfo.lastName} />
          <ShowInfo right="کد ملی" left={patientInfo.nationalId} />
          <ShowInfo
            right="تاریخ تولد"
            left={getFormattedDate(patientInfo.birthDate)}
          />
        </FormWrapper>
      </div>
      <Table
        dataSource={patientPrescList}
        columns={columns}
        rowClassName="cursor-pointer"
        onRow={(record) => {
          return {
            onClick: () => {
              handlePrestSelect(record);
            },
          };
        }}
      />
      <div className="mt-6 ">
        <Button onClick={handleBack}>بازگشت</Button>
      </div>
    </div>
  );
};

export default PrescList;
