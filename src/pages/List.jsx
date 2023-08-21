import React from "react";
import Search from "./components/Search";
import Review from "./pages/Review";
import Card from "./components/Card";
export default function App() {
  return (
    <div>
      <Card />
      <Search />
      <Review />
    </div>
  );
}