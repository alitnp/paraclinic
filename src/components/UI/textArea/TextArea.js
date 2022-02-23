import { Input } from 'antd';

const { TextArea: AntTextArea } = Input;

const TextArea = ({ ...props }) => {
	return <AntTextArea {...props} />;
};

export default TextArea;
