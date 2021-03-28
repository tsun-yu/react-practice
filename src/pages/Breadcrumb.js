import React from "react";
// import { Link, withRouter } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
function Breadcrumb(props) {
  // console.log(props);

  let path = "";
  let location = useLocation();
  // const pathname = props.location.pathname;
  const pathname = location.pathname;
  switch (pathname) {
    case "/product":
      path = "產品";
      break;
    case "/calender":
      path = "日期";
      break;
    case "/counter":
      path = "計數器";
      break;
    case "/login":
      path = "登入";
      break;
    default:
      path = "";
      break;
  }
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {path}
          </li>
        </ol>
      </nav>
    </>
  );
}
export default Breadcrumb;
