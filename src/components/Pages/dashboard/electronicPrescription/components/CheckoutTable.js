import { Separator } from "asset/helpers/persianTools";
import ShowInfo from "components/UI/showInfo/ShowInfo";
import Table from "components/UI/table/Table";
import { useSelector } from "react-redux";

const CheckoutTable = () => {
  //states
  const { checkoutInfo } = useSelector((state) => state.epresc);

  //constants
  const columns = [
    {
      title: "ردیف",
      dataIndex: "index",
      key: "index",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "نام خدمت",
      key: "TAREF_Name",
      dataIndex: "TAREF_Name",
      render: (text) => {
        return <div className="text-ellipsis max-w-[50ch]">{text}</div>;
      },
    },
    {
      title: "تعداد",
      key: "QTY",
      dataIndex: "QTY",
    },
    {
      title: "قیمت تعهد بیمه",
      key: "ITEM_PRICE",
      dataIndex: "ITEM_PRICE",
      render: (text) => Separator(text) + " ریال",
    },
    {
      title: "قیمت پاراکلینیک",
      key: "REQUEST_PRICE",
      dataIndex: "REQUEST_PRICE",
      render: (text) => Separator(text) + " ریال",
    },
    {
      title: "سهم بیمه",
      key: "ITEM_IS_PRICE",
      dataIndex: "ITEM_IS_PRICE",
      render: (text) => Separator(text) + " ریال",
    },
    {
      title: "سهم بیمار",
      key: "PATIENT_AMOUNT",
      dataIndex: "PATIENT_AMOUNT",
      render: (text) => Separator(text) + " ریال",
    },
  ];

  return (
    <div className="">
      <Table
        dataSource={checkoutInfo?.response?.data?.Data?.Details}
        columns={columns}
      />
      <div className="grid grid-cols-1 p-4 pb-2 mt-4 border rounded-md sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
        <p className="font-medium col-span-full">مجموع :</p>
        <ShowInfo
          right="قیمت پاراکلینیک"
          left={
            Separator(checkoutInfo?.response?.data?.Data?.REQUEST_PRICE) +
            " ریال"
          }
        />
        <ShowInfo
          right="سهم بیمه"
          left={
            Separator(checkoutInfo?.response?.data?.Data?.IS_PRICE) + " ریال"
          }
        />
        <ShowInfo
          right="سهم بیمار"
          left={
            Separator(checkoutInfo?.response?.data?.Data?.PATIENT_AMOUNT) +
            " ریال"
          }
        />
      </div>
    </div>
  );
};

export default CheckoutTable;
