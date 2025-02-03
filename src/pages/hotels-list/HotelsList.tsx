import { useEffect, useState } from 'react';

import { Select } from '../../components/Select';
import * as Styled from './HotelsList.styles';

import { sortOptions } from './HotelsList.const';
import { fetchHotelsList } from '../../services/fetchHotelsList';
import { FetchHotelsListResponse } from '../../services/fetchHotelsList.types';
import { HotelCard } from '../../components/HotelCard';
import { sortByPrice } from './HotelsList.utils';

const HotelsList: React.FC = () => {
  const [hotelListResult, setHotelsListResult] = useState<
    FetchHotelsListResponse | undefined
  >();
  const [sort, setSort] = useState('price-asc'); //default sort
  const [searchKeyword] = useState('Sydney'); //based on title

  useEffect(() => {
    fetchHotelsList().then((result) => {
      const defaultSortedResult = sortByPrice(result.results, sort);
      setHotelsListResult({ ...result, results: defaultSortedResult });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hotelListResult && hotelListResult.results.length > 0) {
      const newSortedResult = sortByPrice(hotelListResult.results, sort);
      setHotelsListResult((prev) => ({
        ...prev,
        results: newSortedResult,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  if (!hotelListResult) {
    return <div> is Loading ...</div>;
  }

  const onSortChange = (value: string) => {
    setSort(value);
  };

  return (
    <Styled.HotelsListWrapper>
      <Styled.HotelsListHeader>
        <Styled.HotelsListResultsDetail>
          <span>{hotelListResult.results.length}</span> hotels in
          <span>{searchKeyword}</span>.
        </Styled.HotelsListResultsDetail>
        <Select
          id="sort"
          label="Sort by"
          options={sortOptions}
          onChange={onSortChange}
        />
      </Styled.HotelsListHeader>
      <Styled.HotelsListResults>
        {hotelListResult.results.map((hotel) => {
          return (
            <Styled.HotelsListResultWrapper
              data-testid={'hotels-list-card-wrapper'}
              key={hotel.id}
            >
              <HotelCard {...hotel} />
            </Styled.HotelsListResultWrapper>
          );
        })}
      </Styled.HotelsListResults>
    </Styled.HotelsListWrapper>
  );
};

export default HotelsList;
