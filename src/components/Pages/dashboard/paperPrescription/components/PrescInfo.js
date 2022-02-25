import { Button, Form } from "antd";
import { englishNum } from "asset/helpers/persianTools";
import DoctorInfo from "components/Pages/dashboard/paperPrescription/components/DoctorInfo";
import PatientInfo from "components/Pages/dashboard/paperPrescription/components/PatientInfo";
import PrescDate from "components/Pages/dashboard/paperPrescription/components/PrescDate";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPprescInfo } from "redux/reducers/pprescReducer/pprescReducer";

const PrescInfo = ({ next, back }) => {
  //states
  const [form] = Form.useForm();
  const { prescInfo } = useSelector((state) => state.ppresc);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    form.setFieldsValue({ ...prescInfo });
  }, []);

  //functions
  const handleChange = (value) => {
    if (value.nationalCode)
      form.setFieldsValue({
        nationalCode: englishNum(value.nationalCode),
      });
    if (value.patient_mobile)
      form.setFieldsValue({
        patient_mobile: englishNum(value.patient_mobile),
      });
    if (value.bletSerial)
      form.setFieldsValue({
        bletSerial: englishNum(value.bletSerial),
      });
    if (value.doc_mdid)
      form.setFieldsValue({
        doc_mdid: englishNum(value.doc_mdid),
      });
  };
  const handleSubmit = (values) => {
    dispatch(setPprescInfo(values));
    next();
  };
  return (
    <div className="">
      <PrescDate />
      <Form
        form={form}
        requiredMark={false}
        onFinish={handleSubmit}
        onValuesChange={handleChange}
      >
        <PatientInfo />
        <DoctorInfo />
        <div className="flex justify-between pt-4 border-t col-span-full">
          <Button onClick={back}>بازگشت</Button>
          <Button type="primary" htmlType="submit">
            ثبت
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PrescInfo;
