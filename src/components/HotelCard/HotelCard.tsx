import { ImageWithBadge } from '../ImageWithBadge';
import * as Styled from './HotelCard.styles';

import { getCurrencySymbol } from '../../utils/currencySymbol';

import type { Hotel } from './HotelCard.types';
import { Rating } from '../Rating';

const HotelCard: React.FC<Hotel> = (props) => {
  const { offer, property } = props;
  return (
    <Styled.HotelCardWrapper>
      <ImageWithBadge
        src={property.previewImage.url}
        alt={property.previewImage.caption}
        width={150}
        height={150}
        badgeLabel={offer.promotion.title}
      ></ImageWithBadge>
      <Styled.HotelCarDetails>
        <Styled.HotelCarDetailsDetails>
          <Styled.HotelCarDetailsHeading>
            <div>
              <Styled.TitleWrapper>
                <h2>{property.title}</h2>
              </Styled.TitleWrapper>
              <Rating
                maxRating={5}
                rate={property.rating.ratingValue}
                type={property.rating.ratingType}
              />
            </div>
            <span>{property.address.join(', ')}</span>
          </Styled.HotelCarDetailsHeading>
          <Styled.HotelCarDetailsOfferName>
            {offer.name}
          </Styled.HotelCarDetailsOfferName>
          <Styled.HotelCarDetailsCancellation>
            {offer.cancellationOption.cancellationType ===
              'FREE_CANCELLATION' && 'Free cancellation'}
          </Styled.HotelCarDetailsCancellation>
        </Styled.HotelCarDetailsDetails>
        <Styled.HotelCarDetailsPricing>
          <Styled.HotelCarDetailsPricingTime>
            <b>1</b> night total ({offer.displayPrice.currency})
          </Styled.HotelCarDetailsPricingTime>
          <Styled.HotelCarDetailsPricingPrice>
            <span>{`${getCurrencySymbol(offer?.savings?.currency)}`}</span>
            {offer.displayPrice.amount}
          </Styled.HotelCarDetailsPricingPrice>
          <Styled.HotelCarDetailsPricingSave>
            {offer.savings &&
              `Save ${getCurrencySymbol(offer.savings.currency)}${offer.savings.amount}~`}
          </Styled.HotelCarDetailsPricingSave>
        </Styled.HotelCarDetailsPricing>
      </Styled.HotelCarDetails>
    </Styled.HotelCardWrapper>
  );
};

export default HotelCard;
