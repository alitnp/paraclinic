import { Modal } from "antd";
import { englishNum, Separator } from "asset/helpers/persianTools";
import Button from "components/UI/button/Button";
import Input from "components/UI/input/Input";
import InputNumber from "components/UI/inputNumber/InputNumber";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setEprescDetail } from "redux/reducers/eprescReducer/eprescReducer";

const EditDetail = ({ index, close }) => {
  //states
  const { prescDetail } = useSelector((state) => state.epresc);

  //hooks
  const dispatch = useDispatch();

  //functions
  const handlePriceChange = (e) => {
    const tempDetails = [...prescDetail.Details];
    const editingObject = { ...tempDetails[index] };
    editingObject.taref_price = englishNum(e.target.value);
    tempDetails[index] = editingObject;
    const tempPresc = { ...prescDetail, Details: tempDetails };
    dispatch(setEprescDetail(tempPresc));
  };
  const handleQuantityChange = (e) => {
    const tempDetails = [...prescDetail.Details];
    const editingObject = { ...tempDetails[index] };
    editingObject.REQUEST_QTY = englishNum(e);
    tempDetails[index] = editingObject;
    const tempPresc = { ...prescDetail, Details: tempDetails };
    dispatch(setEprescDetail(tempPresc));
  };
  return (
    <Modal
      visible={index !== null}
      footer={false}
      onCancel={close}
      title="ویرایش"
    >
      <p>
        قیمت در تعهد بیمه
        {Separator(prescDetail.Details[index].PAR_TAREF_PRICE)} می باشد.
      </p>
      <p>قیمت پاراکلینیک :</p>
      <Input
        value={prescDetail.Details[index].taref_price}
        onChange={handlePriceChange}
      />
      {prescDetail.Details[index].REQUEST_QTY > 1 && (
        <>
          <p className="mt-6">تعداد :</p>
          <InputNumber
            min={1}
            max={prescDetail.Details[index].REQUEST_QTY}
            value={prescDetail.Details[index].REQUEST_QTY}
            onChange={handleQuantityChange}
          />
        </>
      )}
    </Modal>
  );
};

export default EditDetail;
