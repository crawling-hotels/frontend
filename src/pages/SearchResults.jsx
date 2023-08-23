import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { styled } from "styled-components";

const Body = styled.div`
  display: flex;
  background-color: white;
  margin: 20px;
  flex-direction: column;
  border-radius: 10px;
  width: 1000px;
  height: 300px;
  box-shadow: 2px 2px 2px 2px lightgray;
`;

export default function SearchResults() {
  const list = [
    {
      id: 1,
      name: "종로 아이콘 호텔",
      location: "종로구",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/270x200/218319706.jpg?k=9d7c6730484e361ba93a53023165068d744d5ac866506b08a5e969d3fd93a205&o=",
      rate: "3.5",
    },
    {
      id: 2,
      name: "종로 아이콘 호텔",
      location: "종로구",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/270x200/218319706.jpg?k=9d7c6730484e361ba93a53023165068d744d5ac866506b08a5e969d3fd93a205&o=",
      rate: "3.5",
    },
  ];

  return (
    <div style={{ backgroundColor: "#d1eaf5", width: "100vw", height: "100vh" }}>
      <h3>검색결과</h3>
      <Search />
      <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
        <h1 style={{ marginRight: "140px" }}>필터링</h1>
      </div>

      {list &&
        list.map((hotel) => {
          return (
            <Body>
              <Card hotel={hotel} />
            </Body>
          );
        })}
    </div>
  );
}
