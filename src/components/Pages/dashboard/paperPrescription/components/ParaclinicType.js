import { Form } from "antd";
import Button from "components/UI/button/Button";
import FormItem from "components/UI/formItem/FormItem";
import Option from "components/UI/option/Option";
import Select from "components/UI/select/Select";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedParaclinicType } from "redux/reducers/globalInfoReducer/globalInfoReducer";

const ParaclinicType = ({ next }) => {
  //states
  const { selectedParaclinicType, paraclinicTypes } = useSelector(
    (state) => state.globalInfo
  );

  //hooks
  const dispatch = useDispatch();

  //functions
  const handleTypeChange = (e) => dispatch(setSelectedParaclinicType(e));

  return (
    <div className="">
      <Form onFinish={next}>
        <FormItem label="نوع پاراکلینیک">
          <Select
            placeholder="انتخاب کنید"
            value={selectedParaclinicType}
            onChange={handleTypeChange}
          >
            {paraclinicTypes?.map((item) => (
              <Option key={item.ParTypeCode} value={item.ParTypeCode}>
                {item.ParTypeDesc}
              </Option>
            ))}
          </Select>
        </FormItem>
        <div className="flex flex-row-reverse col-span-full">
          <Button type="primary" htmlType="submit">
            مرحله بعد
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ParaclinicType;
