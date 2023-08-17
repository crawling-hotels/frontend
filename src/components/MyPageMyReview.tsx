import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MyPageReviewBlock from './MyPageReviewBlock';
import MoreButton from './MoreButton';
import { ReviewProps } from './DetailReviewBlock';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & li+li {
    margin-top: 15px;
  }
`;

interface Props {
  myReviews: ReviewProps[];
}

const MyPageMyReview = () => {


  return (
    <Base>
      <ListContainer>
        <List>
          <li><MyPageReviewBlock /></li>
          <li><MyPageReviewBlock /></li>
          <li><MyPageReviewBlock /></li>
        </List>
      </ListContainer>
      {/* <MoreButton /> */}
    </Base>
  )
}

export default MyPageMyReview