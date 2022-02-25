import FormItem from "components/UI/formItem/FormItem";
import FormWrapper from "components/UI/FormWrapper/FormWrapper";
import Input from "components/UI/input/Input";

const PatientInfo = () => {
  return (
    <div className="pt-2 border-t">
      <h2 className="text-base">اطلاعات بیمار</h2>

      <FormWrapper>
        <FormItem
          label="کد ملی بیمار"
          name="nationalCode"
          rules={[
            { required: true, message: "کد ملی بیمار وارد نشده" },
            {
              pattern: /[0-9۰-۹]$/,
              message: "کدملی فقط شامل اعداد می‌باشد",
            },
            { max: 10, min: 10, message: `کدملی باید ۱۰ رقم باشد` },
          ]}
        >
          <Input placeholder="کد ملی" />
        </FormItem>
        <FormItem
          label="شماره همراه"
          name="patient_mobile"
          rules={[
            {
              required: true,
              message: "شماره تماس را وارد کنید",
            },
            {
              max: 11,
              min: 11,
              message: `شماره تماس باید ۱۱ رقم باشد`,
            },
            {
              whitespace: true,
              message: "شماره تماس نمی‌تواد شامل فاصله باشد",
            },
            {
              pattern: /^09|۰۹|[0-9۰-۹]$/,
              message: "فرمت شماره تماس نامعتبر است",
            },
          ]}
        >
          <Input placeholder="۰۹xxxxxxxxx" />
        </FormItem>
        <FormItem
          label="شماره بیمه"
          name="bletSerial"
          rules={[
            {
              max: 11,
              min: 11,
              message: `شماره تماس باید ۱۱ رقم باشد`,
            },
            {
              pattern: /[0-9۰-۹]$/,
              message: "فقط اعداد",
            },
          ]}
        >
          <Input placeholder="شماره بیمه" />
        </FormItem>
      </FormWrapper>
    </div>
  );
};

export default PatientInfo;
