import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductLmos extends Schema.Component {
  collectionName: 'components_product_lmos';
  info: {
    displayName: 'lmos';
  };
  attributes: {
    lmoType: Attribute.String;
    lmoString: Attribute.String;
  };
}

export interface ProductReviewPoint extends Schema.Component {
  collectionName: 'components_product_review_points';
  info: {
    displayName: 'reviewPoint';
  };
  attributes: {
    starPoint: Attribute.Decimal;
    reviewCount: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.lmos': ProductLmos;
      'product.review-point': ProductReviewPoint;
    }
  }
}
