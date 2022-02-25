import Pagination from "components/UI/pagination/Pagination";
import Table from "components/UI/table/Table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getServicesList } from "redux/middlewares/services/getServicesList";
import { setServicesPageNumber } from "redux/reducers/servicesReducer/servicesReducer";

const ServiceTable = () => {
  //states
  const { loading, list, pageNumber, pageSize } = useSelector(
    (state) => state.services
  );
  console.log(list);

  //hooks
  const dispatch = useDispatch();

  //functions
  const handlePageChange = (e) => {
    dispatch(setServicesPageNumber(e));
    dispatch(getServicesList());
  };

  //constants
  const columns = [
    {
      title: "ردیف",
      dataIndex: "index",
      render: (_text, _record, index) => {
        return index + 1 + (pageNumber - 1) * pageSize;
      },
    },
    { title: "نام", dataIndex: "SERVICE_NAME", key: "SERVICE_NAME" },
    { title: "کد", dataIndex: "TAREF_CODE", key: "TAREF_CODE" },
    {
      title: "هزینه",
      dataIndex: "GOVERNMENT_PRICE",
      key: "GOVERNMENT_PRICE",
    },
    {
      title: "هزینه فنی",
      dataIndex: "TECHPRICE",
      key: "TECHPRICE",
    },
    {
      title: "جنسیت",
      dataIndex: "AcceptableGender",
      key: "AcceptableGender",
    },
  ];

  return (
    <div className="">
      <Table dataSource={list?.docs} columns={columns} loading={loading} />
      <Pagination
        pageIndex={pageNumber}
        totalPages={list?.totalPages}
        setPage={handlePageChange}
      />
    </div>
  );
};

export default ServiceTable;
