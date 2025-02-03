import * as Styled from './Rating.styles';

import StarFilledIcon from '../../assets/image/star-filled.svg';
import StarIcon from '../../assets/image/star.svg';

import CircleFilledIcon from '../../assets/image/circle-filled.svg';
import CircleIcon from '../../assets/image/circle.svg';

import React from 'react';
import { RatingTypes } from './Rating.types';

const Rating: React.FC<RatingTypes> = ({ maxRating, rate, type }) => {
  const emptyIcon = type === 'self' ? CircleIcon : StarIcon;
  const filledIcon = type === 'self' ? CircleFilledIcon : StarFilledIcon;

  return (
    <Styled.RatingWrapper>
      <Styled.RatingEmpty data-testid={`rating-empty-container-${type}`}>
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <Styled.RatingImg
              src={emptyIcon}
              alt={`rating-${i}`}
              key={i}
            />
          );
        })}
      </Styled.RatingEmpty>
      <Styled.RatingFill
        rate={(rate / maxRating) * 100}
        data-testid={`rating-fill-container-${type}`}
      >
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <Styled.RatingImg
              src={filledIcon}
              alt={`rating-filled-${i}`}
              key={i}
            />
          );
        })}
      </Styled.RatingFill>
    </Styled.RatingWrapper>
  );
};

export default React.memo(Rating);
