import MultiDatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

const DatePicker = ({ ...props }) => {
  return (
    <div style={{ textAlign: 'center !important' }}>
      <MultiDatePicker
        calendar={persian}
        locale={persian_fa}
        inputClass='border border-gray-300 h-7 pr-4 w-full outline-none'
        {...props}
      />
    </div>
  );
};

export default DatePicker;
