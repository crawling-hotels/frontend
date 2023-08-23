import React from "react";

export default function Card({ hotel }) {
  return (
    <div style={{ marginLeft: "10px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "20px" }}>{hotel.name}</h1>
          <img
            style={{ marginLeft: "10px", borderRadius: "14px", width: "180px", height: "180px" }}
            src={hotel.image}
          ></img>
        </section>
        <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
          <section style={{ display: "flex", flexDirection: "row", marginLeft: "30px" }}>
            <h4 style={{ color: "lightgray", marginRight: "10px" }}>위치</h4>
            <h4>{hotel.location}</h4>
          </section>
          <section style={{ display: "flex", flexDirection: "row", margin: "40px" }}>
            <h4 style={{ color: "lightgray", marginRight: "10px" }}>후기</h4>
            <h4>{hotel.rate}</h4>
          </section>
        </div>
      </div>
    </div>
  );
}
