import React from 'react';
import styled from '@emotion/styled';
import Review from './DetailReviewBlock';

const Base = styled.div``;

const DetailReview: React.FC = () => {
  return (
    <Base>
      <Review />
      <Review />
    </Base>
  )
}

export default DetailReview