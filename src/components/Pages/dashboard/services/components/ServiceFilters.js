import { Form } from "antd";
import Button from "components/UI/button/Button";
import FormItem from "components/UI/formItem/FormItem";
import FormWrapper from "components/UI/FormWrapper/FormWrapper";
import Input from "components/UI/input/Input";
import Option from "components/UI/option/Option";
import Select from "components/UI/select/Select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getServicesList } from "redux/middlewares/services/getServicesList";
import { setSelectedParaclinicType } from "redux/reducers/globalInfoReducer/globalInfoReducer";
import {
  setServicesNameFilter,
  setServicesPageNumber,
} from "redux/reducers/servicesReducer/servicesReducer";

const ServiceFilters = () => {
  //states
  const { selectedParaclinicType, paraclinicTypes } = useSelector(
    (state) => state.globalInfo
  );
  const { loading, nameFilter } = useSelector((state) => state.services);

  //hooks
  const dispatch = useDispatch();

  //functions
  const handleTypeChange = (e) => dispatch(setSelectedParaclinicType(e));
  const handleNameChange = (e) =>
    dispatch(setServicesNameFilter(e.target.value));
  const handleSubmit = () => {
    dispatch(setServicesPageNumber(1));
    dispatch(getServicesList());
  };

  return (
    <div className="my-10">
      <Form onFinish={handleSubmit}>
        <FormWrapper>
          <FormItem label="نوع پاراکلینیک">
            <Select
              disabled={loading}
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
          <FormItem label="نام خدمات">
            <Input
              value={nameFilter}
              onChange={handleNameChange}
              disabled={loading}
              allowClear
            />
          </FormItem>
          <div className="flex flex-row-reverse col-span-full">
            <Button type="primary" htmlType="submit" loading={loading}>
              جستجو
            </Button>
          </div>
        </FormWrapper>
      </Form>
    </div>
  );
};

export default ServiceFilters;
