import { InputNumber as AntInputNumber } from "antd";

const InputNumber = ({ ...props }) => {
  return <AntInputNumber {...props} style={{ width: "100%" }} />;
};

export default InputNumber;
