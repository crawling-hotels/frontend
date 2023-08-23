import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";

export default function StartRating() {
  const ARRAY = [0, 1, 2, 3, 4];

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [clicked1, setClicked1] = useState([false, false, false, false, false]);
  const [clicked2, setClicked2] = useState([false, false, false, false, false]);
  const [clicked3, setClicked3] = useState([false, false, false, false, false]);
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const handleStarClick1 = (index) => {
    let clickStates = [...clicked1];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked1(clickStates);
  };

  const handleStarClick2 = (index) => {
    let clickStates = [...clicked2];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked2(clickStates);
  };

  const handleStarClick3 = (index) => {
    let clickStates = [...clicked3];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked3(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };

  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>전체 평점</h1>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && "yellowStar"}
            />
          );
        })}
      </Stars>
      <h3 style={{ marginTop: "50px" }}>항목별 평점</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>위생</h3>
        <Stars>
          {ARRAY.map((el, idx) => {
            return (
              <FaStar
                key={idx}
                size="25"
                onClick={() => handleStarClick1(el)}
                className={clicked1[el] && "yellowStar"}
              />
            );
          })}
        </Stars>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ margin: "10px" }}>위치 접근성</h3>
        <Stars>
          {ARRAY.map((el, idx) => {
            return (
              <FaStar
                key={idx}
                size="25"
                onClick={() => handleStarClick2(el)}
                className={clicked2[el] && "yellowStar"}
              />
            );
          })}
        </Stars>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>비품 만족도</h3>
        <Stars>
          {ARRAY.map((el, idx) => {
            return (
              <FaStar
                key={idx}
                size="25"
                onClick={() => handleStarClick3(el)}
                className={clicked3[el] && "yellowStar"}
              />
            );
          })}
        </Stars>
      </div>
    </div>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  margin-left: 30px;
  & svg {
    color: #c9ccd1;
    cursor: pointer;
  }

  :hover svg {
    color: #d9d9d9;
  }

  & svg:hover ~ svg {
    color: #d9d9d9;
  }

  .yellowStar {
    color: #fcc419;
  }
`;