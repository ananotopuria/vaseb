// import ShopList from '../components/ShopComponents/ShopList';

// export default function ShopPage() {
//   return (
//     <div>
//       <h1>shopPage</h1>
//       <ShopList />
//     </div>
//   );
// }


import React from 'react';
// import './ProductsPage.scss';

const ProductsPage = () => {
  return (
    <div className="page-title">
      <div className="container">
        <div className="sub-title">
          <img 
            src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a81442e040719153851c2_ic-subtitle.svg" 
            alt="Subtitle Icon" 
          />
          <div><h5>New Trending</h5></div>
        </div>
        <h1 className="main-title">Latest Products</h1>
      </div>

      <div className="page-data">
        <section className="products">
          <div className="container">
            <div className="product-list">
              {products.map((product, index) => (
                <div className="product-item" key={index}>
                  <a href={product.link}>
                    <div className="product-img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="shop-item">{product.name}</div>
                    <div className="price-text">{product.price}</div>
                  </a>
                </div>
              ))}
            </div>
            <div className="pagination">
              <a className="primary-button" href="https://vaseb-template.webflow.io/products?06e91c3d_page=2">Next</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const products = [
  {
    link: 'https://vaseb-template.webflow.io/product/study-desk',
    image: 'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666bc705ef0aacd196caf5cc_Product-main-10-p-500.jpg',
    name: 'Study Desk',
    price: '$ 199.99 USD'
  },
  {
    link: 'https://vaseb-template.webflow.io/product/elegant-table-lamp',
    image: 'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666bc633a31433ca70badbfe_Product-main-11-p-500.jpg',
    name: 'Elegant Table Lamp',
    price: '$ 79.99 USD'
  },
  // Add more products as needed
];

export default ProductsPage;
