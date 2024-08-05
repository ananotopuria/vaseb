import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="container w-container mx-auto">
        <div className="banner-wrapper flex flex-col md:flex-row items-center">
          <div className="banner-wrap flex flex-col md:flex-row md:w-full gap-2">
            <div className="banner-left md:w-1/2 bg-[#f8f6f4] text-[#222] flex gap-8 p-8">
              <div className="banner-data">
                <div>
                  <div className="body-small text-gray-500">Customizable</div>
                  <h4 className="banner-title text-2xl">
                    Where modern living begins!
                  </h4>
                  <div className="text-gray-700">
                    Shop now for stylish furniture, and smart home solutions.
                  </div>
                </div>
                <a
                  href="/products"
                  className="primary-button w-inline-block bg-black text-white py-2 px-4 rounded mt-4"
                >
                  <div className="btn-text-wrap flex items-center justify-center">
                    <div className="btn-text">Shop Now</div>
                    <div className="btn-text hover hidden">Shop Now</div>
                  </div>
                </a>
              </div>
              <div className="banner-img mt-4">
                <img
                  src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c028c0061395d6592f403_banner-2.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 43vw, (max-width: 991px) 44vw, 22vw"
                  srcSet="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c028c0061395d6592f403_banner-2-p-500.jpg 500w, https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c028c0061395d6592f403_banner-2.jpg 618w"
                  alt="Banner Image"
                  className="banner-image w-full"
                />
              </div>
            </div>
            <div className="banner-right md:w-1/2">
              <img
                src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c028d80938de55f124083_banner.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 48vw"
                srcSet="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c028d80938de55f124083_banner-p-500.jpg 500w, https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c028d80938de55f124083_banner-p-800.jpg 800w, https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c028d80938de55f124083_banner-p-1080.jpg 1080w, https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666c028d80938de55f124083_banner.jpg 1286w"
                alt="Banner Image"
                className="banner-image w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-baseline gap-5 banner-bottom md:mt-8 p-4 text-center md:text-left bg-[#f8f6f4]">
          <h3 className="banner-heading text-2xl font-bold">
            Explore our sale! Up to 50% off select furniture.
          </h3>
          <div className="text-gray-700 mt-2">
            Discover your style with our exclusive sale!
          </div>
          <a
            href="/our-categories"
            className="primary-button w-inline-block bg-black text-white py-2 px-4 rounded mt-4"
          >
            <div className="btn-text-wrap flex items-center justify-center">
              <div className="btn-text">Collection</div>
              <div className="btn-text hover hidden">Collection</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
