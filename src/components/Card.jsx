import React from "react";
import fakeData from "../api/fakeData";
export default function Card() {
  const { dummy } = new fakeData();
  return <div>console.log(dummy.title)</div>;
}