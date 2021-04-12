import React from "react";
// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NoteFoundPage(props) {
  let history = useHistory();
  return (
    <>
      <h1>404頁面不存在</h1>
      <button
        className="btn btn-primary"
        // onClick={() => {
        //   props.history.push("/");
        // }}
        onClick={() => {
          history.push("/");
        }}
      >
        回首頁
      </button>
      <hr />
      <button
        className="btn btn-primary"
        // onClick={() => {
        //   props.history.goBack();
        // }}
        onClick={() => {
          history.goBack();
        }}
      >
        回上一頁
      </button>
    </>
  );
}

// export default withRouter(NoteFoundPage);
export default NoteFoundPage;
