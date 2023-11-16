import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="routeError">
      <h1>This route doesn't exist!</h1>
      <Link to={'/'}>
        Click here to return to the homepage
      </Link>
    </div>
  )
}

export default ErrorPage;
