import React from 'react';
import styled from '@emotion/styled';
import { AiFillStar } from 'react-icons/ai';

const Base = styled.div`
  /* background-color: beige; */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
`;

const RateNum = styled.div`
  display: flex;
  margin-left: 5px;
  
  & p {
    font-size: 20px;
  }
`;

const HotelImageContainer = styled.div`
  overflow: hidden;
  /* background-color: aliceblue; */
  height: 350px;
`;

const HotelImage = styled.img`
  height: 350px;
`;

const DetailHotelIntro: React.FC = () => {
  return (
    <Base>
      <Header>
        <h2>K-GRAND HOTEL</h2>
        <Rate>
          <AiFillStar style={{ color: '#768CCE'}} />
          <RateNum>
            <p>3.2</p>
            <p style={{ color: '#949494'}}>/5</p>            
          </RateNum>
        </Rate>
      </Header>
      <HotelImageContainer>
        <HotelImage src='assets\hotel.png' />
      </HotelImageContainer>
      <p style={{ fontSize: "16px" }}>K-그랜드 호텔 & 게스트하우스 서울은 경의중앙선, 공항철도 서울역 13번 출구에서 도보 1분 거리에 자리해 있습니다. 주변의 관광 명소로는 쇼핑을 즐기기 좋은 명동과 남대문 시장까지 지하철로 환승 없이 10분 이내에 갈 수 있으며 다양한 문화가 어우러진 이태원이 차로 약 15분 거리에 있습니다. 이 게스트하우스는 서울에 자리해 있으며 무료 와이파이(Wi-Fi)를 제공합니다. 또한 주변 관광 명소를 둘러보시기에 좋은 위치를 갖추고 있습니다.</p>
    </Base>
  )
}

export default DetailHotelIntro