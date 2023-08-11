import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


const Base = styled.div`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  border: 2px solid #768CCE;
  background-color: white;
  color: #768CCE;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 5px; */
`;

interface Props {
  onClick: (isPicked: boolean) => void
}

const PickButton: React.FC<Props> = ({ onClick }) => {
  const [hover, setHover] = useState(false);
  const [isPicked, setIsPicked] = useState(false);

  return (
    <Base 
      title='찜하기'
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onClick={() => {
        setIsPicked(!isPicked);
        onClick(isPicked);
      }}
    >
      {
        isPicked ? <AiFillHeart /> 
        : hover ? <AiFillHeart /> : <AiOutlineHeart />
      }    
    </Base>
  )
}

export default PickButton