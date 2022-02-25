import { Form } from "antd";
import DatePicker from "components/UI/datePicker/DatePicker";
import FormItem from "components/UI/formItem/FormItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPprescDate } from "redux/reducers/pprescReducer/pprescReducer";

const PrescDate = () => {
  //states
  const { prescDate } = useSelector((state) => state.ppresc);

  //hooks
  const dispatch = useDispatch();

  //functions
  const handleChange = (e) => {
    dispatch(setPprescDate(e));
  };

  return (
    <Form>
      <FormItem label="تاریخ نسخه">
        <DatePicker
          value={prescDate}
          onChange={handleChange}
          maxDate={Date.now()}
        />
      </FormItem>
    </Form>
  );
};

export default PrescDate;
