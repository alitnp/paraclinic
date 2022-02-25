import ServiceFilters from "components/Pages/dashboard/services/components/ServiceFilters";
import ServiceTable from "components/Pages/dashboard/services/components/ServiceTable";
import PageTitle from "components/UI/pageTitle/PageTitle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getServicesList } from "redux/middlewares/services/getServicesList";

const Services = () => {
  //hooks
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    dispatch(getServicesList());
  }, []);

  return (
    <div className="">
      <PageTitle title="لیست خدمات" />
      <div className="mb-4 border-b">
        <p>
          لیست خدمات قابل ارائه در پاراکلینیک به همراه جزئیات آنها در جدول زیر
          آمده. <br />
          شما می توانید با استفاده از منوهای پایین نوع و نام خدمات مورد نظر را
          جستجو کنید.
        </p>
      </div>
      <ServiceFilters />
      <ServiceTable />
    </div>
  );
};

export default Services;
