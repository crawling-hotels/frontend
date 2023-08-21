import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { AiTwotoneCalendar } from "react-icons/ai";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <label>
        <DatePicker
          showPopperArrow={false}
          locale={ko}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          showIcon
        />
      </label>
    </div>
  );
};

export default DatePickers;