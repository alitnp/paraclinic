import AcceptedTable from "components/Pages/dashboard/accepted/components/AcceptedTable";
import PageTitle from "components/UI/pageTitle/PageTitle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAcceptedPrescriptions } from "redux/middlewares/epresc/getAcceptedPriscriptions";

const Accepted = () => {
  //states
  const { list } = useSelector((state) => state.acceptedPrescs);
  console.log(list);
  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !list && dispatch(getAcceptedPrescriptions());
  }, []);

  return (
    <div className="">
      <PageTitle title="نسخه های ثبت شده" />
      <AcceptedTable />
    </div>
  );
};

export default Accepted;
