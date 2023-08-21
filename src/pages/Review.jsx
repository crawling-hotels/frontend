import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageUpload from "../components/ImageUpload";
import StartRating from "../components/StartRating";

export default function Review() {
  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>"종로 호텔"</h2>
      <hr style={{ color: "#EAEAEA", border: "solid", size: "8px" }} />
      <StartRating />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageUpload />
      </div>
      <div>
        <input type="text" placeholder="후기를 입력해주세요." />
        <button type="submit">등록하기</button>
      </div>
    </div>
  );
}