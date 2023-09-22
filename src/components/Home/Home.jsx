import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div className="container  mx-auto my-10 text-center flex flex-col">
      <Header></Header>
      {navigation.state === "loading" ? (
        <span className="loading loading-bars loading-lg mx-auto text-center"></span>
      ) : (
        ""
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
