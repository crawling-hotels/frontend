import React from "react";
import { useState } from "react";
import DatePickers from "./DatePickers";

export default function Search() {
  return (
    <div>
      <input type="text" placeholder="위치를 입력하세요" />
      <DatePickers />
      <DatePickers />
      <button>검색</button>
    </div>
  );
}