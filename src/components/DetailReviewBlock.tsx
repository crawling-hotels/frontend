import React, { useState } from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  display: flex;
  align-items: baseline;
  /* background-color: lavender; */
`;

const ReviewContent = styled.div`
  padding: 0 10px;
`;

const ContentText = styled.p`
  cursor: pointer;

  &.open {
    /* background-color: blanchedalmond; */
  }
  &.closed {
    color: #3E3E3E;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* background-color: pink; */
  }
`;

const ContentPhoto = styled.img`
  height: 200px;
`;

const ReviewComment = styled.div`
  background-color: #E1DFDF;
  padding: 20px 15px;

  &:nth-of-type(1) {
    margin-top: 40px;
  }

  & + & {
    margin-top: 20px;
  }

  & p {
    margin: 0;
  }
`;

const CommentInputContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 15px;
  border: 1px solid #9A9393;
  border-right: 0;
  resize: none;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const PostCommentButton = styled.button`
  white-space: nowrap;
  padding: 30px;
  background-color: white;
  border: 1px solid #9A9393;
  cursor: pointer;

  :hover {
    background-color: #F5F5F5;
  }
`;

export interface ReviewProps {
  hotelName?: string,
  title: string,
  contentText: string,
  contentPhotoUrl?: string,
  hyRate: number,
  locRate: number,
  eqRate: number,
  comments?: {
    userId: string,
    content: string
  }[]
}

const Review: React.FC = () => {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);
  const [reviewComment, setReviewComment] = useState<string>("");

  const postComment = () => {
    //reviewComment를 올리기
    //올린 후 페이지 reload
  }


  const sample: ReviewProps = {
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
    <Base>
      <div style={{ fontWeight: "bold" }}>
        {((sample.hyRate + sample.locRate + sample.eqRate)/3).toFixed(1)}
      </div>
      <ReviewContent>
        <h4>{sample.title}</h4>
        <ContentText 
          className={isContentOpen ? 'open' : 'closed'}
          onClick={() => setIsContentOpen(!isContentOpen)}>
          {sample.contentText}
        </ContentText>
        {
          isContentOpen &&
            <div>
              <p style={{ color: "#6D6D6D" }}>
                {`위생 ${sample.hyRate.toFixed(1)}  /  위치 접근성 ${sample.locRate.toFixed(1)}  / 비품 만족도 ${sample.eqRate.toFixed(1)}`}
              </p>
              {sample.contentPhotoUrl && 
                <ContentPhoto src={sample.contentPhotoUrl} alt='not found'
                />
              }
              {sample.comments && (
                sample.comments.map((com,idx) => (
                  <ReviewComment key={`comment-${idx}`}>
                    <p style={{ color: "#777777" }}>{com.userId}</p>
                    <p style={{ color: "#3E3E3E", marginTop: "5px" }}>{com.content}</p>
                  </ReviewComment>
                ))
              )}
              <CommentInputContainer>
                <CommentInput onChange={(event) => setReviewComment(event.currentTarget.value)} />
                <PostCommentButton onClick={postComment}>
                  등록
                </PostCommentButton>
              </CommentInputContainer>
            </div>
        }
      </ReviewContent>
    </Base>
  )
}

export default Review