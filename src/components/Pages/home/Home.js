import routes from "asset/constants/routes";
import ContentWrapper from "components/UI/contentWrapper/ContentWrapper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //states

  //hooks
  const navigate = useNavigate();

  //effects
  useEffect(() => {
    navigate(routes.dashboard.path);
  }, []);

  return <ContentWrapper>home</ContentWrapper>;
};

export default Home;
