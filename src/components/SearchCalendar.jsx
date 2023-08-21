import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import React from "react";

export default function SearchCalendar() {
  return (
    <div>
      <DatePicker
        locale={ko}
        dateFormat={yyyy - MM - dd}
        selected={checkInDate}
        onChange={(date) => setCheckInDate(date)}
      />
    </div>
  );
}