import { Select as AntSelect } from 'antd';

const Select = ({ children, ...props }) => {
	return <AntSelect {...props}>{children}</AntSelect>;
};

export default Select;
