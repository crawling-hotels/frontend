import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';
import { name_num } from './SelectNumBox';

const Base = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 0;
`;

const NumContainer = styled.div`
  display: flex;
  align-items: center;
  /* background-color: pink; */
  position: absolute;
  right: 0;
`;

const PlusMinusButton = styled.div<{ isMinus: boolean }>`
  margin-right: ${(isMinus) => isMinus ? "5px" : "0"};
  margin-left: ${(isMinus) => isMinus ? "5px" : "0"};
  padding-top: 5px;
  cursor: pointer;
`;

interface Props {
  type: string,
  initialValue: number,
  groupNumState: name_num[],
  setGroupNumState: React.Dispatch<React.SetStateAction<name_num[]>>
}

export const SelectNumBoxOption: React.FC<Props> = ({ 
  type,
  initialValue, 
  groupNumState, 
  setGroupNumState 
}) => {

  const [num, setNum] = useState<number>(initialValue);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    let numsState = [...groupNumState];
    console.log(`${type}-before:}`,numsState);
    numsState = numsState.filter((val)=> val.name !== type);
    numsState.push({
      name: type,
      num: num
    });
    console.log(`${type}-after:}`,numsState);
    setGroupNumState(numsState);
  }, [num]);

  return (
    <Base>
      <div>{type}</div>
      <NumContainer>
        <PlusMinusButton isMinus={true} onClick={() => {
          if (num > 0) setNum(num-1);
        }}>
          <CiSquareMinus />
        </PlusMinusButton>
        <span style={{ color: "#4A4A4A"}}>{num}</span>
        <PlusMinusButton isMinus={false} onClick={() => {
          setNum(num+1);
        }}>
          <CiSquarePlus />
        </PlusMinusButton>
      </NumContainer>
    </Base>
  )
}

