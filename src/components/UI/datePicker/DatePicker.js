import MultiDatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePicker = ({ ...props }) => {
  return (
    <div style={{ textAlign: "center !important" }}>
      <MultiDatePicker
        calendar={persian}
        locale={persian_fa}
        inputClass="transition-all duration-500 border border-gray-300 hover:border-p-primary w-full h-8 pr-4 outline-none rounded-[4px]"
        {...props}
      />
    </div>
  );
};

export default DatePicker;
