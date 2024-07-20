// // import React from 'react';
// import './Footer.scss';

// const Footer = () => {
//   return (
//     <footer>
//       <div className="ft-container">
//         <div className="ft-wrap">
//           <div className="ft-col">
//             <div className="ft-heading">Company</div>
//             <div className="ft-menu">
//               <a href="#" className="ft-link">About us</a>
//               <a href="#" className="ft-link">Shop</a>
//               <a href="#" className="ft-link">Blogs</a>
//               <a href="#" className="ft-link">Reviews</a>
//               <a href="#" className="ft-link">Stores</a>
//               <a href="#" className="ft-link">Contact us</a>
//               <a href="#" className="ft-link">FAQ</a>
//             </div>
//           </div>
//           <div className="ft-col">
//             <div className="ft-heading">Resources</div>
//             <div className="ft-menu">
//               <a href="#" className="ft-link">Style Guide</a>
//               <a href="#" className="ft-link">Privacy Policy</a>
//               <a href="#" className="ft-link">Terms & Conditions</a>
//               <a href="#" className="ft-link">Return Policy</a>
//               <a href="#" className="ft-link">Licensing</a>
//               <a href="#" className="ft-link">Contact us</a>
//               <a href="#" className="ft-link">Changelog</a>
//             </div>
//           </div>
//           <div className="ft-col">
//             <div className="ft-heading">Connected</div>
//             <div className="ft-menu ft-connected">
//               <a href="#" className="ft-link"><i className="fab fa-instagram"></i> Instagram</a>
//               <a href="#" className="ft-link"><i className="fab fa-facebook-f"></i> Facebook</a>
//               <a href="#" className="ft-link"><i className="fab fa-youtube"></i> YouTube</a>
//               <a href="#" className="ft-link"><i className="fab fa-twitter"></i> Twitter</a>
//             </div>
//           </div>
//           <div className="ft-col">
//             <div className="ft-heading">Join Our Mailing List</div>
//             <div className="ft-menu">
//               <div className="ft-text">Stay up-to-date with the latest news, and design.</div>
//               <form action="">
//                 <label htmlFor="ft-email" className="ft-email-label">Email Address</label><br />
//                 <div id="ft-input" className="ft-input" tabIndex="1">
//                   <input type="email" id="ft-email" className="ft-email" name="ft-email" placeholder="Enter your email" />
//                   <img src="arrow.png" alt="" />
//                 </div>
//                 <input type="checkbox" />
//                 <span className="checkbox-span">I agree to receive promotional emails from Modern Living.</span>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="ft-bottom">
//         <div className="ft-bottom-container">
//           <div>© 2024 Vaseb. All rights reserved.</div>
//           <div>Designed by Nixar. Powered by Webflow.</div>
//           <a href="#" className="ft-button">
//             <img src="webflow.svg" alt="" />GET TEMPLATE
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
// import './Footer.scss';
// import styles from './../../../pages/Categories/categoriesPage';

const Footer: React.FC = () => {
  return (
    <>
    <div className="imgWrapper">
        <div>
          <img
            src="https://www.thespruce.com/thmb/cBb8kUTiCPKaMjYSu2IMkUhbwOo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01.737ParkAvenuebyChangoCo.-LivingRoomWideR1-fa4deea9615743c996d3eee70a6d0573.jpg"
            alt="furniture"
            className="fixedImage"
          />
          <div className="imageText">
            <h1 className="imgTitle">Browse modern today!</h1>
            <p className="imgP">
              Dive into our curated collection of contemporary furniture and
              decor, meticulously designed to elevate your living spaces.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="ft-container">
          <div className="ft-wrap">
            <div className="ft-col">
              <div className="ft-heading">Company</div>
              <div className="ft-menu">
                <a href="#" className="ft-link">
                  About us
                </a>
                <a href="#" className="ft-link">
                  Shop
                </a>
                <a href="#" className="ft-link">
                  Blogs
                </a>
                <a href="#" className="ft-link">
                  Reviews
                </a>
                <a href="#" className="ft-link">
                  Stores
                </a>
                <a href="#" className="ft-link">
                  Contact us
                </a>
                <a href="#" className="ft-link">
                  FAQ
                </a>
              </div>
            </div>
            <div className="ft-col">
              <div className="ft-heading">Resources</div>
              <div className="ft-menu">
                <a href="#" className="ft-link">
                  Style Guide
                </a>
                <a href="#" className="ft-link">
                  Privacy Policy
                </a>
                <a href="#" className="ft-link">
                  Terms & Conditions
                </a>
                <a href="#" className="ft-link">
                  Return Policy
                </a>
                <a href="#" className="ft-link">
                  Licensing
                </a>
                <a href="#" className="ft-link">
                  Contact us
                </a>
                <a href="#" className="ft-link">
                  Changelog
                </a>
              </div>
            </div>
            <div className="ft-col">
              <div className="ft-heading">Connected</div>
              <div className="ft-menu ft-connected">
                <a href="#" className="ft-link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="#" className="ft-link">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="#" className="ft-link">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
                <a href="#" className="ft-link">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
            <div className="ft-col">
              <div className="ft-heading">Join Our Mailing List</div>
              <div className="ft-menu">
                <div className="ft-text">
                  Stay up-to-date with the latest news, and design.
                </div>
                <form action="">
                  <label htmlFor="ft-email" className="ft-email-label">
                    Email Address
                  </label>
                  <br />
                  <div id="ft-input" className="ft-input" tabIndex={1}>
                    <input
                      type="email"
                      id="ft-email"
                      className="ft-email"
                      name="ft-email"
                      placeholder="Enter your email"
                    />
                    <img src="arrow.png" alt="" />
                  </div>
                  <input type="checkbox" />
                  <span className="checkbox-span">
                    I agree to receive promotional emails from Modern Living.
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="ft-bottom">
          <div className="ft-bottom-container">
            <div>© 2024 Vaseb. All rights reserved.</div>
            <div>Designed by Nixar. Powered by Webflow.</div>
            <a href="#" className="ft-button">
              <img src="webflow.svg" alt="" />
              GET TEMPLATE
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
