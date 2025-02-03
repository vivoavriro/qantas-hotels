import styled from 'styled-components';

export const HotelsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HotelsListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HotelsListResultsDetail = styled.p`
  font-style: italic;
  color: gray;
  & > span {
    font-weight: bold;
    font-style: normal;
    color: black;
  }
`;

export const HotelsListSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 0.5rem; */
  font-weight: bold;
`;

export const HotelsListResults = styled.ul`
  display: flex;
  flex-direction: column;
  /* & > div {
    padding: 0.25rem 0%;
    border-top: 1px solid gray;
  } */
`;

export const HotelsListResultWrapper = styled.li`
  padding: 0.5rem 0%;
  border-top: 1px solid gray;
  &:last-of-type {
    border-bottom: 1px solid gray;
  }
`;
