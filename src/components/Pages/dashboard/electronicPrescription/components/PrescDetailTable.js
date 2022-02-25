import { EditOutlined } from "@ant-design/icons";
import { Separator } from "asset/helpers/persianTools";
import EditDetail from "components/Pages/dashboard/electronicPrescription/components/EditDetail";
import Button from "components/UI/button/Button";
import Checkbox from "components/UI/checkBox/CheckBox";
import Table from "components/UI/table/Table";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  detailAcceptedToggle,
  setPostingErrors,
} from "redux/reducers/eprescReducer/eprescReducer";

const PrescDetailTable = ({ back }) => {
  //states
  const { prescDetail, postingErrors, loading } = useSelector(
    (state) => state.epresc
  );
  const [editIndex, setEditIndex] = useState(null);
  console.log(postingErrors);
  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    dispatch(setPostingErrors(null));
  }, [prescDetail]);

  //functions
  const closeEdit = () => setEditIndex(null);

  //constants
  const columns = [
    {
      title: "تایید",
      key: "accept",
      dataIndex: "accept",
      render: (_text, record, index) => {
        return (
          <Checkbox
            checked={record.accepted}
            onChange={() => dispatch(detailAcceptedToggle(index))}
          />
        );
      },
    },
    {
      title: "ویرایش",
      key: "edit",
      dataIndex: "edit",
      render: (_text, _recorde, index) => {
        return <EditOutlined onClick={() => setEditIndex(index)} />;
      },
    },
    {
      title: "نام خدمت",
      key: "PAR_TAREF_NAME",
      dataIndex: "PAR_TAREF_NAME",
      render: (text) => {
        return <div className="text-ellipsis max-w-[50ch]">{text}</div>;
      },
    },
    {
      title: "قیمت تعهد بیمه",
      key: "PAR_TAREF_PRICE",
      dataIndex: "PAR_TAREF_PRICE",
      render: (text) => {
        if (text === "0") return "شامل بیمه نمی باشد.";
        return Separator(text) + " ریال";
      },
    },
    {
      title: "قیمت پاراکلینیک",
      key: "taref_price",
      dataIndex: "taref_price",
      render: (text) => Separator(text) + " ریال",
    },
    {
      title: "تعداد درخواستی",
      key: "REMAINING_QTY",
      dataIndex: "REMAINING_QTY",
    },
  ];

  return (
    <div className="pt-6 border-t">
      <p className="font-medium">لیست خدمات مورد نیاز</p>
      <Table
        dataSource={prescDetail?.Details}
        columns={columns}
        rowClassName={(record, index) =>
          record.accepted ? "bg-green-100" : ""
        }
        loading={loading}
      />
      {editIndex !== null && <EditDetail index={editIndex} close={closeEdit} />}
      {postingErrors && (
        <div className="p-4 mt-6 border border-orange-300 bg-orange-50">
          <p className="font-bold">{postingErrors?.StatusDesc}</p>
          {postingErrors?.Problems?.map((item, index) => {
            return (
              <div key={index}>
                <p className="mb-0 font-medium">
                  {"- " + item.Code + " : " + item.Description}
                </p>
                <p className="text-xs">{item.TechnicalInfo}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PrescDetailTable;
