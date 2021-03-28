import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumb from "./Breadcrumb";

function Calender(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <h1>日期選擇</h1>
      <Breadcrumb />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </>
  );
}

export default Calender;
