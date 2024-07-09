/* eslint-disable prettier/prettier */
interface Category {
  name: string;
  href: string;
  imageUrl: string;
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const categories: Category[] = [
  {
    name: 'Clocks',
    href: '/starter_project/shop?category=clocks',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae301e4d9af43cd5b4f97_category-06.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://andersen-furniture.com/app/uploads/2022/09/Kvadrat-3-6.jpg',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://image.made-in-china.com/2f0j00NTnbgYOrhKuU/Nordic-Solid-Wood-Modern-Simple-Household-Furniture-Cream-Style-Fabric-Sofa.webp',
      },
    ] as Product[],
  },
  {
    name: 'Sofas',
    href: '/starter_project/shop?category=sofas',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2b818b5623fef33ee2a_category-01.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://ak1.ostkcdn.com/images/products/is/images/direct/142be810ae15c21724cf9424b6c0870b3a25d1a2/Elegant-Beige-Linen-Sofa-with-Storage---Sturdy-and-Plush.jpg',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
  {
    name: 'Tables',
    href: '/starter_project/shop?category=tables',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2ca4fa5c390dbbb79d2_category-02.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
       {
        id: 'clock3',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
       {
        id: 'clock3',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
  {
    name: 'Chairs',
    href: '/starter_project/shop?category=chairs',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2d88e839b736134ea83_category-03.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
  {
    name: 'Lamps',
    href: '/starter_project/shop?category=lamps',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2e70007c60f49da9eb0_category-04.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
  {
    name: 'Vases',
    href: '/starter_project/shop?category=vases',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2f3911a07e0e1e81db7_category-05.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
  {
    name: 'Bookcases',
    href: '/starter_project/shop?category=bookcases',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae30fc88c72a0eeda6c73_category-07.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
  {
    name: 'Wardrobes',
    href: '/starter_project/shop?category=wardrobes',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae31bda6c6b5d2cd81ae6_category-08.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
  {
    name: 'Beds',
    href: '/starter_project/shop?category=beds',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae329a2dd970e146ab60e_category-09.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
  {
    name: 'Desk',
    href: '/starter_project/shop?category=desk',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae336a3165a0ff3f9b80a_category-10.jpg',
    products: [
      {
        id: 'clock1',
        name: 'Vintage Wall Clock',
        price: 89.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
      {
        id: 'clock2',
        name: 'Modern Desk Clock',
        price: 49.99,
        imageUrl: 'https://i5.walmartimages.com/asr/3787363e-4cfd-4f58-936b-144ca1f775d2.0f280c9559199c0f519683a6d3e2c975.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      },
    ] as Product[],
  },
];
