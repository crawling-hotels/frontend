import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userAtom';
import MyPageCalendar from '../components/MyPageCalendar';
import MyPagePickedHotel from '../components/MyPagePickedHotel';
import DivisionLine from '../components/DivisionLine';
import MyPageMyReview from '../components/MyPageMyReview';
import Header from '../components/Header';

const Base = styled.div`
  
`;

const Body = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 40px 0;
  width: 1200px;
  /* background-color: beige; */

  & section > h1 {
    font-size: 20px;
    color: #535353;
    margin-bottom: 25px;
  }
`;


const NavigationContainer = styled.div`
  width: 249px;
  height: fit-content;
  border: 1px solid #d1d1d1;
  border-radius: 20px;
  /* background-color: white; */
  padding: 20px;

  & h1 {
    color: #757575;
    font-size: 17px;
    margin: 0;
    margin-bottom: 15px;
  }
`;

const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li<{ isSelected: boolean }>`
  font-size: 17px;
  font-weight: bold;
  color: ${({ isSelected }) => isSelected ? "#3D66E0" : "#757575"};
  padding: 13px 5px;
  background-color: ${({ isSelected }) => isSelected ? "aliceblue" : ""};
  margin: 10px 0;
  cursor: pointer;
`;

const Content = styled.div`
  /* background-color: greenyellow; */
  width: 900px;
  height: calc(100vh - 100px - 40px);
  margin-left: 50px;
`;

const MyPage: React.FC = () => {
  const user = useRecoilValue(userState);
  const [curContentId, setCurContentId] = useState(0);

  useEffect(() => {
    //찜한 숙소 데이터 가져오기

    //내 게시글 데이터 가져오기
  }, []);

  const contents = [
    {
      title: "내 일정",
      component: <MyPageCalendar />
    },
    {
      title: "찜한 숙소",
      component: <MyPagePickedHotel />
    },
    {
      title: "내 게시글",
      component: <MyPageMyReview />
    }
  ];


  return (
    <Base>
      <Header />
      <Body>
        <NavigationContainer>
          <h1>{`${user}님의`}<br/>마이페이지</h1>
          <Navigation>
            {
              contents.map((val,idx) => (
                <NavItem
                  isSelected={idx===curContentId} 
                  onClick={() => setCurContentId(idx)}>
                  {val.title}
                </NavItem>
              ))
            }
          </Navigation>
        </NavigationContainer>
        <Content>
          {contents[curContentId].component}
        </Content>
      </Body>
    </Base>

  )
}

export default MyPage