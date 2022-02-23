import ContentWrapper from "components/UI/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //states

  //hooks
  const navigate = useNavigate();

  return <ContentWrapper>home</ContentWrapper>;
};

export default Home;
