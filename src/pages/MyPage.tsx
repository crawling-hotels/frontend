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

const Profile = styled.div`
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #E1DFDF; */
  /* border: 2px solid #E1DFDF; */
  /* border-radius: 20px; */
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const Content = styled.div`
  /* background-color: greenyellow; */
  width: 900px;
  margin-left: 50px;
`;

const MyPage: React.FC = () => {
  const user = useRecoilValue(userState);
  const [userEmail, setUserEmail] = useState("");
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  useEffect(() => {
    //찜한 숙소 데이터 가져오기

    //내 게시글 데이터 가져오기
  }, []);

  useEffect(() => {
    if (user !== null) {
      const userData = JSON.parse(user);
      setUserEmail(userData.email);
      setUserPhotoUrl(userData.photoURL);
    }
  }, [user]);

  return (
    <Base>
      <Header />
      <Body>
        <Profile>
          <ProfileImage src={userPhotoUrl} alt='userPhoto'/>
          <p>{userEmail}</p>
        </Profile>
        <Content>

          <section>
            <h1>내 일정</h1>
            <MyPageCalendar />
          </section>

          <DivisionLine />

          <section>
            <h1>찜한 숙소</h1>
            <MyPagePickedHotel />
          </section>

          <DivisionLine />

          <section>
            <h1>내 게시글</h1>
            <MyPageMyReview />
          </section>

        </Content>
      </Body>
    </Base>

  )
}

export default MyPage