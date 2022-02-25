import FormItem from "components/UI/formItem/FormItem";
import FormWrapper from "components/UI/FormWrapper/FormWrapper";
import Input from "components/UI/input/Input";

const DoctorInfo = () => {
  return (
    <div className="pt-2 border-t">
      <h2 className="text-base">اطلاعات پزشک</h2>

      <FormWrapper>
        <FormItem
          label="کد نظام پزشکی"
          name="doc_mdid"
          rules={[
            { required: true, message: "کد نظام پزشکی وارد نشده" },
            {
              pattern: /[0-9۰-۹]$/,
              message: "کد نظام پزشکی فقط شامل اعداد می‌باشد",
            },
            { max: 10, min: 10, message: `کد نظام پزشکی باید ۱۰ رقم باشد` },
          ]}
        >
          <Input placeholder="کد نظام پزشکی" />
        </FormItem>
        <FormItem label="نام پزشک" name="doc_name">
          <Input placeholder="نام پزشک" />
        </FormItem>
        <FormItem label="تخصص پزشک" name="profession">
          <Input placeholder="تخصص پزشک" />
        </FormItem>
      </FormWrapper>
    </div>
  );
};

export default DoctorInfo;
