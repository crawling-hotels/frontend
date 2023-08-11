import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AiFillStar } from 'react-icons/ai';
import { ReviewProps } from './DetailReviewBlock';

const Base = styled.div`
  border: 2px solid #E1DFDF;   
  border-radius: 15px;
  width: calc(100% - 20px);
  cursor: pointer;
  padding: 10px;

  &>p {
    color: #4A4A4A;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &>h1 {
    font-size: 14px;
    color: #4A4A4A;
  }
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Title = styled.p`
  font-size: 14px;
`;

const Content = styled.p`
  font-size: 14px;

  &.closed {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #5E5E5E;
  }

  &.opened {
  }
`;

const ReviewButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 10px
`;

const ReviewButton = styled.div`
  border: 1px solid #E1DFDF;
  border-radius: 5px;
  font-size: 14px;
  color: #4A4A4A;
  padding: 2px 4px;

  &:hover {
    background-color: #F5F5F5;
  }

  & + & {
    margin-left: 5px;
  }
`;

const SpecificRate = styled.p`
  font-size: 14px;
  color: #6D6D6D;
`;

const ContentPhoto = styled.img`
  height: 200px;
  border-radius: 15px;
`;

const MyPageReviewBlock: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const deleteReview = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();

    if (window.confirm("리뷰를 삭제하시겠습니까?")) {
      //리뷰 삭제 로직

      alert("삭제 완료");
      window.location.reload();//새로고침
    } else {
      alert("삭제 취소");
    }
  }

  const reviseReview = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    
    //리뷰수정창 띄우기
  }

  const sample: ReviewProps = {
    hotelName: "종로 아이콘 호텔",
    title: "숙소 만족해요!",
    contentText: "서울역 가까이에 이런 좋은 숙소가 있다니, 사막에서 오아시스를 발견한 것 같습니다. 깨끗하고 청결한 환경과 주변의 풍부한 맛집, 까페, 서울역에서 진짜 가까운 손색없는 숙소, 만점 오브 만점입니다. 애용할게요~^^ 서울 올 때마다 찜~!! 콩~~!!하겠습니다. ^^♡",
    contentPhotoUrl: 'assets/hotel.png',
    hyRate: 4.5,
    locRate: 4.5,
    eqRate: 4.0,
    comments: [
      {
        userId: "abcd1234@gmail.com",
        content: "너무 멋진 숙소네요! 다음에 저도 가봐야겠어요:)"
      },
      {
        userId: "abcd1234@gmail.com",
        content: "너무 멋진 숙소네요! 다음에 저도 가봐야겠어요:)"
      }
    ]
  }

  return (
    <Base onClick={() => setIsOpen(!isOpen)}>
      <Header>
        <h1>{sample.hotelName}</h1>
        <Rate>
          <AiFillStar style={{ color: "#768CCE"}} />
          {((sample.hyRate + sample.locRate + sample.eqRate)/3).toFixed(1)}
        </Rate>
        {
          isOpen && (
            <ReviewButtonsContainer>
              <ReviewButton onClick={deleteReview}>삭제</ReviewButton>
              <ReviewButton onClick={reviseReview}>수정</ReviewButton>
            </ReviewButtonsContainer>
          )
        }
      </Header>
      <Title>{sample.title}</Title>
      <Content className={isOpen ? 'opened' : 'closed'}>
        {sample.contentText}
      </Content>
      {
        isOpen && (
          <div>
            <SpecificRate>
            {`위생 ${sample.hyRate.toFixed(1)}  /  위치 접근성 ${sample.locRate.toFixed(1)}  / 비품 만족도 ${sample.eqRate.toFixed(1)}`}
            </SpecificRate>
            {sample.contentPhotoUrl && 
                <ContentPhoto src={sample.contentPhotoUrl} alt='not found'
                />
              }
          </div>
        )
      }
    </Base>
  )
}

export default MyPageReviewBlock