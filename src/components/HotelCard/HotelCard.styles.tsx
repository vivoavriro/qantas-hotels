import styled from 'styled-components';

export const HotelCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HotelCarDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  border-bottom: 1px;
  padding: 1rem 0 0.5rem 0;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HotelCarDetailsDetails = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: start;
`;

export const HotelCarDetailsHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
  & > div {
    display: flex;
    gap: 1rem;
    & > h2 {
      font-size: 1.25rem;
    }
  }
  & > span {
    font-size: 0.75rem;
    color: gray;
  }
`;

export const HotelCarDetailsOfferName = styled.p`
  align-self: center;
  color: #c51a1a;
  font-size: 0.75rem;
  text-decoration: underline;
`;

export const HotelCarDetailsCancellation = styled.p`
  align-self: end;
  color: green;
  font-size: 0.75rem;
`;

export const HotelCarDetailsPricing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 0.5rem;
`;

export const HotelCarDetailsPricingTime = styled.p``;

export const HotelCarDetailsPricingPrice = styled.h4`
  display: flex;
  gap: 0.2rem;
  font-size: 1.5rem;

  & > span {
    font-size: 1rem;
    padding-top: 2px;
  }
`;

export const HotelCarDetailsPricingSave = styled.div`
  font-size: 1.25rem;
  color: #c51a1a;
  min-height: 20px;
`;

export const TitleWrapper = styled.div`
  display: -moz-box;
  display: -webkit-box;
  display: box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  max-width: 65%;
  line-height: 1.25rem;
  text-align: left;
`;
