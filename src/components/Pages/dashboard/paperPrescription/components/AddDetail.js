import { Form, Modal } from "antd";
import endpointUrls from "asset/constants/endpointUrls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import apiServices from "services/apiServices";
import AsyncSelect from "react-select/async";
import FormItem from "components/UI/formItem/FormItem";
import InputNumber from "components/UI/inputNumber/InputNumber";
import Button from "components/UI/button/Button";
import { useDispatch } from "react-redux";
import { setPprescDetail } from "redux/reducers/pprescReducer/pprescReducer";

const AddDetail = ({ visible, close }) => {
  //states
  const { selectedParaclinicType } = useSelector((state) => state.globalInfo);
  const { prescDetail } = useSelector((state) => state.ppresc);
  const [list, setList] = useState([]);
  const [selectedService, setSelectedService] = useState();
  const [request_qty, setRequest_qty] = useState(1);
  const [defaultOptions, setDefaultOptions] = useState([]);

  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    getDefaultOptions();
  }, [selectedParaclinicType]);

  //functions
  const handleClose = () => {
    setRequest_qty(1);
    setSelectedService(null);
    close();
  };
  const loadOptions = async (inputValue, callback) => {
    const result = await apiServices.get(
      endpointUrls.searchParaclinicServices +
        `?page=${1}&limit=${50}&PARTYPE_CODE=${selectedParaclinicType}&SERVICE_NAME=${inputValue}`
    );
    if (result.data?.data?.docs) {
      setList(result.data.data.docs);
      callback(
        result.data.data.docs.map((item) => ({
          label: item.SERVICE_NAME,
          value: item.TAREF_CODE,
        }))
      );
    }
  };
  const handleChange = (e) => {
    let result = list.find((item) => item.TAREF_CODE === e.value);
    if (!result)
      result = defaultOptions.find((item) => item.TAREF_CODE === e.value);
    setSelectedService(result);
  };
  const getDefaultOptions = async () => {
    const result = await apiServices.get(
      endpointUrls.searchParaclinicServices +
        `?page=${1}&limit=${50}&PARTYPE_CODE=${selectedParaclinicType}`
    );
    console.log("result");
    if (result.data?.data?.docs) {
      setDefaultOptions(result.data.data.docs);
    }
  };
  const handleSubmit = () => {
    if (!selectedService) return;
    const tempPrescDetail = [...prescDetail];
    const index = tempPrescDetail.findIndex(
      (item) => item.id === selectedService.id
    );
    if (index !== -1) {
      tempPrescDetail[index] = {
        ...tempPrescDetail[index],
        request_qty: tempPrescDetail[index].request_qty + request_qty,
      };
    } else {
      tempPrescDetail.push({ ...selectedService, request_qty });
    }
    dispatch(setPprescDetail(tempPrescDetail));
    close();
  };

  return (
    <Modal
      visible={visible}
      onCancel={handleClose}
      footer={false}
      title="انتخاب خدمات"
    >
      <Form onFinish={handleSubmit}>
        <div className="mb-6">
          <p>نام خدمات مورد نظر را وارد کنید :</p>
          <AsyncSelect
            placeholder="نام خدمات را وارد کنید"
            loadOptions={loadOptions}
            onChange={handleChange}
            defaultOptions={defaultOptions.map((item) => ({
              label: item.SERVICE_NAME,
              value: item.TAREF_CODE,
            }))}
          />
        </div>
        <FormItem label="تعداد">
          <InputNumber min={1} value={request_qty} onChange={setRequest_qty} />
        </FormItem>
        <div className="flex flex-row-reverse pt-4 border-t">
          <Button htmlType="submit" type="primary">
            افزودن به نسخه
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddDetail;
