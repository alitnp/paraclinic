import { Form } from "antd";
import { englishNum } from "asset/helpers/persianTools";
import Button from "components/UI/button/Button";
import FormItem from "components/UI/formItem/FormItem";
import FormWrapper from "components/UI/FormWrapper/FormWrapper";
import Input from "components/UI/input/Input";
import Option from "components/UI/option/Option";
import Select from "components/UI/select/Select";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkEstehghagh } from "redux/middlewares/epresc/checkEstehghagh";
import { setSelectedParaclinicType } from "redux/reducers/globalInfoReducer/globalInfoReducer";

const BasicInfo = ({ next }) => {
  //states
  const { paraclinicTypes, selectedParaclinicType } = useSelector(
    (state) => state.globalInfo
  );
  const { loading } = useSelector((state) => state.epresc);
  const [form] = Form.useForm();

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    form.setFieldsValue({ paraclinicType: selectedParaclinicType });
  }, [selectedParaclinicType]);

  //functions
  const handleSubmit = (values) => {
    dispatch(setSelectedParaclinicType(values.paraclinicType));
    dispatch(checkEstehghagh(values.patientNationalId, next));
  };
  const handleChange = (value) => {
    if (value.patientNationalId)
      form.setFieldsValue({
        patientNationalId: englishNum(value.patientNationalId),
      });
  };

  return (
    <div className="">
      <div className="mb-4 border-b">
        <p>
          لطفا نوع پاراکلینیک را انتخاب کنید و کد ملی بیمار را وارد کنید. <br />
          درصورتی که بیمار شامل بیمه باشد، لیست نسخه های اختصاص یافته به بیمار
          نمایش داده می شود.
        </p>
      </div>
      <Form
        form={form}
        requiredMark={false}
        onFinish={handleSubmit}
        onValuesChange={handleChange}
      >
        <FormWrapper>
          <FormItem
            label="نوع پاراکلینیک"
            name="paraclinicType"
            rules={[{ required: true, message: "نوع پاراکلینیک انتخاب نشده" }]}
          >
            <Select disabled={loading} placeholder="انتخاب کنید">
              {paraclinicTypes?.map((item) => (
                <Option key={item.ParTypeCode} value={item.ParTypeCode}>
                  {item.ParTypeDesc}
                </Option>
              ))}
            </Select>
          </FormItem>
          <FormItem
            label="کد ملی بیمار"
            name="patientNationalId"
            rules={[
              { required: true, message: "کد ملی بیمار وارد نشده" },
              {
                pattern: /[0-9۰-۹]$/,
                message: "کدملی فقط شامل اعداد می‌باشد",
              },
              { max: 10, min: 10, message: `کدملی باید ۱۰ رقم باشد` },
            ]}
          >
            <Input disabled={loading} placeholder="کد ملی" />
          </FormItem>
          <div className="flex flex-row-reverse col-span-full">
            <Button type="primary" htmlType="submit" loading={loading}>
              ثبت
            </Button>
          </div>
        </FormWrapper>
      </Form>
    </div>
  );
};

export default BasicInfo;
