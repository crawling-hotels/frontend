import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  background-color: #F5F5F5;
  border-radius: 20px;
  width: fit-content;
  padding: 5px 30px;
  cursor: pointer;

  &:hover {
    background-color: #E1DFDF; 
  }
`;

interface Props {
  onClick?: () => {}
}

const MoreButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Base onClick={onClick}>더보기</Base>
  )
}

export default MoreButton