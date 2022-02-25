import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import endpointUrls from "asset/constants/endpointUrls";
import { getFormattedDate } from "asset/helpers/getFormattedDate";
import { Separator } from "asset/helpers/persianTools";
import Pagination from "components/UI/pagination/Pagination";
import Table from "components/UI/table/Table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAcceptedPrescriptions } from "redux/middlewares/epresc/getAcceptedPriscriptions";
import {
  setAcceptedPrescsLoading,
  setAcceptedPrescsPageNumber,
} from "redux/reducers/acceptedPrescsReducer/acceptedPrescsReducer";
import apiServices from "services/apiServices";

const AcceptedTable = () => {
  //states
  const { list, loading, pageNumber, pageSize } = useSelector(
    (state) => state.acceptedPrescs
  );

  //hooks
  const dispatch = useDispatch();

  //functions
  const handleDelete = async (id) => {
    dispatch(setAcceptedPrescsLoading(true));
    const result = await apiServices.remove(
      endpointUrls.deletePresc + "?requestId=" + id
    );
    dispatch(setAcceptedPrescsLoading(false));
    if (result.isSuccess) dispatch(getAcceptedPrescriptions());
  };
  const handlePageChange = (e) => {
    dispatch(setAcceptedPrescsPageNumber(e));
    dispatch(getAcceptedPrescriptions());
  };
  const getDetailTable = (row) => {
    const detail = row.response.data.Data.Details;

    const columns = [
      { title: "خدمت", key: "TAREF_Name", dataIndex: "TAREF_Name" },
      { title: "تعداد", key: "QTY", dataIndex: "QTY" },
      {
        title: "هزینه کل",
        key: "ITEM_PRICE",
        dataIndex: "ITEM_PRICE",
        render: (text) => Separator(text),
      },
      {
        title: "پرداختی بیمار",
        key: "PATIENT_AMOUNT",
        dataIndex: "PATIENT_AMOUNT",
        render: (text) => Separator(text),
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={detail}
        pagination={false}
        size="small"
      />
    );
  };

  //constants
  const parentTableCollumns = [
    {
      title: "ردیف",
      dataIndex: "index",
      render: (_text, _record, index) => {
        return index + 1 + (pageNumber - 1) * pageSize;
      },
    },
    {
      title: "تاریخ نسخه",
      dataIndex: "prescDate",
      key: "prescDate",
      render: (text) => getFormattedDate(text),
    },
    {
      title: "شماره نسخه",
      dataIndex: "prescriptionId",
      key: "prescriptionId",
    },
    {
      title: "شماره ثبت",
      dataIndex: "requestId",
      key: "requestId",
    },
    {
      title: "کد ملی بیمار",
      dataIndex: "patientNationalId",
      key: "patientNationalId",
    },
    {
      title: "پزشک",
      dataIndex: "doctorFullName",
      key: "doctorFullName",
    },
    {
      title: "ارجاع",
      dataIndex: "removeAble",
      key: "removeAble",
      render: (_text, record) => {
        if (record.removeAble) {
          return (
            <Popconfirm
              title="نسخه بازگشت داده شود؟"
              icon={false}
              onConfirm={() => handleDelete(record.requestId)}
            >
              <DeleteOutlined />
            </Popconfirm>
          );
        }
      },
    },
  ];

  return (
    <div className="">
      <Table
        dataSource={list?.docs}
        loading={loading}
        columns={parentTableCollumns}
        expandable={{ expandedRowRender: getDetailTable }}
        rowKey="id"
      />
      <Pagination
        pageIndex={pageNumber}
        totalPages={list?.totalPages}
        setPage={handlePageChange}
      />
    </div>
  );
};

export default AcceptedTable;
