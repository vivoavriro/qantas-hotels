import styled from 'styled-components';

export const ImageWithBadgeWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9; //sample aspect ratio
  }
`;

export const Badge = styled.p`
  position: absolute;
  top: 5px;
  left: 1px;
  background-color: white;
  padding: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #c51a1a;
`;
