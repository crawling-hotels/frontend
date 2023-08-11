import React, { useState } from 'react';
import styled from '@emotion/styled';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const Base = styled.div`
  position: relative;
`;

const SelectedOptionText = styled.div`
  color: #5E5E5E;
  cursor: pointer;
  font-size: .8rem;
`;

const OptionBoxContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => isVisible ? "block" : "none"};
  position: absolute;
  top: 22px;
  z-index: 2;
  width: 90%;
`;

interface Props {
  title: string;
  text: React.ReactNode;
  children: React.ReactNode;
  // type: "date_range" | "person_num" | "room_num";
  // setOptionData: React.Dispatch<React.SetStateAction<any>>
}

const SelectOption: React.FC<Props> = ({ title, text, children }) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  
  const onClick = () => {
    setIsBoxOpen(!isBoxOpen);
  }


  return (
    <Base>
      <div onClick={onClick}>{title}</div>
      <SelectedOptionText onClick={onClick}>
        {text}
      </SelectedOptionText>
      <OptionBoxContainer isVisible={isBoxOpen}>
        {children}
      </OptionBoxContainer>
    </Base>
  )
}

export default SelectOption