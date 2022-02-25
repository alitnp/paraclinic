import { DeleteOutlined } from "@ant-design/icons";
import Table from "components/UI/table/Table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPprescDetail } from "redux/reducers/pprescReducer/pprescReducer";

const ServicesTable = () => {
  //states
  const { prescDetail, loading } = useSelector((state) => state.ppresc);

  //dispatch
  const dispatch = useDispatch();

  //functions
  const handleRemove = (id) => {
    if (loading) return;
    dispatch(setPprescDetail(prescDetail.filter((item) => item.id !== id)));
  };

  //constants
  const columns = [
    {
      title: "ردیف",
      key: "index",
      dataIndex: "index",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "نام",
      key: "SERVICE_NAME",
      dataIndex: "SERVICE_NAME",
    },
    {
      title: "تعداد",
      key: "request_qty",
      dataIndex: "request_qty",
    },
    {
      title: "جنسیت",
      key: "AcceptableGender",
      dataIndex: "AcceptableGender",
    },
    {
      title: "حذف",
      key: "remove",
      dataIndex: "remove",
      render: (_text, record) => (
        <div className="text-red-500">
          <DeleteOutlined onClick={() => handleRemove(record.id)} />
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <Table dataSource={prescDetail} columns={columns} />
    </div>
  );
};

export default ServicesTable;
