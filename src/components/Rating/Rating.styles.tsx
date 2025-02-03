import styled from 'styled-components';

export const RatingWrapper = styled.div`
  width: max-content;
  position: relative;
`;

export const RatingFill = styled.div<{ rate?: number }>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: ${(props) => `rect(0px ${props.rate || 100}% 100% 0)`};
`;

export const RatingEmpty = styled.div`
  width: 100%;
`;

export const RatingImg = styled.img`
  width: 15px;
  margin-right: 2px;
`;
