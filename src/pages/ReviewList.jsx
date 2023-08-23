import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewList(){
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(`/review`);
    }
   return(
        <div>
            <h1 style={{alignItems : 'center'}}>예약내역</h1>
            <button onClick={onClick}>예약하기</button>
        </div>
    );
}