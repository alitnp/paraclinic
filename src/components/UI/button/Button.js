import { Button as AntButton } from 'antd';

const Button = ({ children, ...props }) => {
	return <AntButton {...props}>{children}</AntButton>;
};

export default Button;
