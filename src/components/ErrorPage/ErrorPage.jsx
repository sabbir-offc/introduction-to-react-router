import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto text-center">
      <h3 className="text-6xl text-center">Opps, Page not found.</h3>
      <p className="text-center mt-10">
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={goHome} className="text-center btn btn-warning mx-auto">
        Home
      </button>
    </div>
  );
};

export default ErrorPage;
