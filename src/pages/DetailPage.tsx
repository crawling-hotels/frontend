import React from 'react'
import styled from '@emotion/styled';
import DetailHotelIntro from './DetailHotelIntro';
import DivisionLine from './DivisionLine';
import DetailRoomPrice from './DetailRoomPrice';
import DetailReview from './DetailReview';
import DetailSideBar from './DetailSideBar';
import Header from './Header';

const Base = styled.div`
`;

const Body = styled.div`
  /* background-color: beige; */
  padding: 40px 0;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
`;

const Content = styled.div`
  width: 900px;
`;

const SideBar = styled.div`
  margin-left: 70px;
  width: 230px;
  /* background-color: bisque; */
`;



const DetailPage = () => {

  return (
    <Base>
      <Header />
      <Body>
        <Content>
          <section>
            <DetailHotelIntro />
          </section>
          <DivisionLine />
          <section>
            <h3>기간 내 객실 가격</h3>
            <DetailRoomPrice />
          </section>
          <DivisionLine />
          <section>
            <h3>리뷰</h3>
            <DetailReview />
          </section>
        </Content>
        <SideBar>
          <DetailSideBar />
        </SideBar>
      </Body>
    </Base>
    

  )
}

export default DetailPage