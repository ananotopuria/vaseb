import React from 'react';
import Hero from '../components/HomeComponents/Hero';
// import Header from '../components/Layout/Header/index';
import Testimonials from '../components/HomeComponents/Testimonials';
import ModernToday from '../components/HomeComponents/ModernToday';


const App: React.FC = () => {
  return (
    <div>
      <div className="main">
        <Hero></Hero>

        {/* <CategoriesPage></CategoriesPage> */}
        <section className="category">
          <div className="container">
            <div className="row ">
              <div className="category-list ">
                <div className="item">
                  <a href="#">
                    {' '}
                    <img src="./images/clock.jpg" alt="" />{' '}
                    <p className="item-title">Clocks</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    {' '}
                    <img src="./images/sofa.jpg" alt="" />{' '}
                    <p className="item-title">Sofas</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    {' '}
                    <img src="./images/row1.jpg" alt="" />{' '}
                    <p className="item-title">Tables</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    {' '}
                    <img src="./images/chairs.jpg" alt="" />{' '}
                    <p className="item-title">Chairs</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    {' '}
                    <img src="./images/lamp.jpg" alt="" />{' '}
                    <p className="item-title">Lamps</p>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    {' '}
                    <img src="./images/vases.jpg" alt="" />{' '}
                    <p className="item-title">Vases</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-collection">
          <div className="container">
            <div className="row">
              <i className="icon"></i>
              <span className="section-sub-titile">Best Selling</span>
              <h2 className="section-title">Featured Collection</h2>
            </div>
            <div className="row d-flex">
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/sofa1.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Velvet Accent Chair</h3>
                    <p>$ 399.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/sofa3.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Study Desk</h3>
                    <p>$ 259.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img
                      src="./images/table_lamp.jpg"
                      alt="sofa"
                      className=""
                    />
                  </div>
                  <div className="item-desc">
                    <h3>Elegant TableLamp</h3>
                    <p>$ 399.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/chairs.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Industrial Metal Bookcase</h3>
                    <p>$ 509.00 USD</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="furniture-and-decor">
          <div className="decor-wrap d-flex">
            <div className="decor-data">
              <span className="section-sub-titile">Contemporary Living</span>
              <h2 className="section-title">Furniture & Decor for Homes</h2>
              <span className="section-sub-titile-bottom">
                Transform your living space with our stylish furniture and
                decor.
              </span>
              <br />
              <button className="button rounded bg-white">About Us</button>
            </div>
            <div className="decor-img">
              <img src="./images/decor.jpg" alt="decor" />
            </div>
          </div>
        </section>
        <section className="latest-products">
          <div className="container">
            <div className="row">
              <span className="section-sub-titile">Best Selling</span>
              <h2 className="section-title">Featured Collection</h2>
            </div>
            <div className="row d-flex">
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/sofa1.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Velvet Accent Chair</h3>
                    <p>$ 399.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/sofa3.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Study Desk</h3>
                    <p>$ 259.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img
                      src="./images/table_lamp.jpg"
                      alt="sofa"
                      className=""
                    />
                  </div>
                  <div className="item-desc">
                    <h3>Elegant TableLamp</h3>
                    <p>$ 399.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/chairs.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Industrial Metal Bookcase</h3>
                    <p>$ 509.00 USD</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="row d-flex">
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/sofa1.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Velvet Accent Chair</h3>
                    <p>$ 399.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/sofa3.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Study Desk</h3>
                    <p>$ 259.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img
                      src="./images/table_lamp.jpg"
                      alt="sofa"
                      className=""
                    />
                  </div>
                  <div className="item-desc">
                    <h3>Elegant TableLamp</h3>
                    <p>$ 399.00 USD</p>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="/#">
                  <div className="item-img">
                    <img src="./images/chairs.jpg" alt="sofa" className="" />
                  </div>
                  <div className="item-desc">
                    <h3>Industrial Metal Bookcase</h3>
                    <p>$ 509.00 USD</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="row">testimonials</div> */}
        <Testimonials></Testimonials>
        <section className="options">
          <div className="container">
            <div className="row d-flex">
              <div className="item">
                <img src="./images/vite.svg" alt="" />
                <h4>Order Tracking</h4>
                <p>Track real time your order</p>
              </div>
              <div className="item">
                <img src="./images/shipping.svg" alt="" />
                <h4>Order Tracking</h4>
                <p>Track real time your order</p>
              </div>
              <div className="item">
                <img src="./images/payment.svg" alt="" />
                <h4>Order Tracking</h4>
                <p>Track real time your order</p>
              </div>
              <div className="item">
                <img src="./images/shipping-1.svg" alt="" />
                <h4>Order Tracking</h4>
                <p>Track real time your order</p>
              </div>
              <div className="item">
                <img src="./images/time.svg" alt="" />
                <h4>Order Tracking</h4>
                <p>Track real time your order</p>
              </div>
            </div>
          </div>
        </section>
        <div className="row">News & Articles</div>
        {/* <ModernToday></ModernToday> */}
      </div>
    </div>
  );
};

export default App;
