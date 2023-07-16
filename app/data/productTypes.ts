export type Product = {
  price: number;
  discount: number;
  discount_price: number;
  images: {
    order: number;
    url: string;
  }[];
  code: string;
  shortDescription: string;
  product_code: string;
  search_url: string;
  name: string;
  price_currency: string;
  rate: string;
};

export type Banner = {
  id: number;
  title: string;
  imgUrl: string;
};

export type Section = {
  title: string;
  data: (Product | Banner)[];
};

export const SECTIONS: Section[] = [
  {
    title: 'Banner',
    data: [
      {
        id: 1,
        title: 'Banner',
        imgUrl: '@proj/assets/banner.png',
      },
    ],
  },
];
