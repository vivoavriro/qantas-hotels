export type Property = {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: {
    url: string;
    caption: string;
    imageType: string;
  };
  rating: {
    ratingValue: number;
    ratingType: string;
  };
};

export type Offer = {
  promotion: {
    title: string;
    type: string;
  };
  name: string;
  displayPrice: {
    amount: number;
    currency: string;
  };
  savings: {
    amount: number;
    currency: string;
  } | null;
  cancellationOption: {
    cancellationType: string;
  };
};

export type Hotel = {
  id: string;
  property: Property;
  offer: Offer;
};
