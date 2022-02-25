import { Form } from "antd";

const FormItem = ({ children, ...props }) => {
  return (
    <Form.Item labelCol={{ span: 6 }} {...props}>
      {children}
    </Form.Item>
  );
};

export default FormItem;
