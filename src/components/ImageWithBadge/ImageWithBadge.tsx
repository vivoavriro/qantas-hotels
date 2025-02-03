import * as Styled from './ImageWithBadge.styles';

import { ImageWithBadgeTypes } from './ImageWithBadge.types';

const ImageWithBadge: React.FC<ImageWithBadgeTypes> = ({
  src,
  alt,
  badgeLabel,
  height,
  width,
}) => {
  return (
    <Styled.ImageWithBadgeWrapper>
      <Styled.Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      {badgeLabel && (
        <Styled.Badge data-testid="image-badge">{badgeLabel}</Styled.Badge>
      )}
    </Styled.ImageWithBadgeWrapper>
  );
};

export default ImageWithBadge;
