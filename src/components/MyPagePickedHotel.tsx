import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MyPagePickedHotelBlock, { PickedHotelProps } from './MyPagePickedHotelBlock';
import MoreButton from './MoreButton';

const Base = styled.div`
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* background-color: beige; */
`;

const List = styled.div`
  /* background-color: pink; */
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MyPagePickedHotel: React.FC = () => {
  const [pickedHotels, setPickedHotels] = useState<PickedHotelProps[]>();

  useEffect(()=> {
    //
  }, []);

  return (
    <Base>
      <Content>
        <List>
          <MyPagePickedHotelBlock />
          <MyPagePickedHotelBlock />
          <MyPagePickedHotelBlock />
        </List>
        {/* <MoreButton /> */}
      </Content>
      
    </Base>
  )
}

export default MyPagePickedHotel