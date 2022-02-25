import { Table as AntTable } from "antd";

const Table = ({ ...props }) => {
  return (
    <div className="grid grid-cols-1">
      <div>
        <AntTable scroll={{ x: 600 }} pagination={false} bordered {...props} />
      </div>
    </div>
  );
};

export default Table;
