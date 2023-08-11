import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  border: 2px solid #E1DFDF;
  border-radius: 14px;
  width: 30%;
  height: 170px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;


const HotelImg = styled.img`
  width: 100%;
  height: 170px;
`;

const Description = styled.div`
  background-color: rgba(245,245,245,0.8);
  /* background-color: white; */
  width: 100%;
  /* height: 50px; */
  position: absolute;
  top: 0;
  padding: 10px;
`;


const DescriptionTitle = styled.h1`
  font-size: 17px;
  margin: 0;
  margin-bottom: 5px;
`;

const DescriptionText = styled.p`
  font-size: 10px;
  color: #5E5E5E;
  margin: 0;
`;


export interface PickedHotelProps {
  name: string,
  location: string,
  rate: number,
  photoUrl: string,
  link?: string
}

const MyPagePickedHotelBlock: React.FC = () => {

  const sample: PickedHotelProps = {
    name: "종로 아이콘 호텔",
    location: "서울 강남구 삼성동",
    rate: 3.5,
    photoUrl: 'assets/hotel.png',
  }

  const onBlockClick = () => {

  }//클릭 시 숙소페이지로 이동


  return (
    <Base onClick={onBlockClick}>
      <HotelImg src={sample.photoUrl}></HotelImg>
      <Description>
        <DescriptionTitle>{sample.name}</DescriptionTitle>
        <DescriptionText>
          {`${sample.location} / ${sample.rate}`}
        </DescriptionText>
      </Description>
    </Base>
  )
}

export default MyPagePickedHotelBlock