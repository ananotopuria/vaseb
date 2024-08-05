import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="vision mb-20">
      <div className="container w-container mx-auto">
        <div className="vision-wrap flex flex-col md:flex-row items-center">
          <div className="vision-img md:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666bf1901c5b59066532c09b_vision.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 46vw"
              srcSet="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666bf1901c5b59066532c09b_vision-p-500.jpg 500w, https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666bf1901c5b59066532c09b_vision-p-800.jpg 800w, https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666bf1901c5b59066532c09b_vision-p-1080.jpg 1080w, https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666bf1901c5b59066532c09b_vision.jpg 1280w"
              alt="Vision Image"
              className="section-image w-full"
            />
            <div className="on-scroll" style={{ display: 'block', transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}></div>
          </div>
          <div className="vision-data md:w-1/2 p-4">
            <h3 className="text-2xl">Our Vision &amp; Mission</h3>
            <p className="text-gray-700">
              To curate and deliver exceptional products that embody the essence of contemporary living, enriching homes with sophistication, comfort, sustainability, and intelligent design.
            </p>
            <p className="single-text text-gray-700">
              To redefine modern living by seamlessly blending innovation, style, &amp; functionality, creating spaces that inspire and elevate the human experience.
            </p>
            <div className="button-wrap mt-4">
              <a href="/our-categories" className="primary-button w-inline-block bg-black text-white py-2 px-4 rounded">
                <div className="btn-text-wrap flex items-center justify-center">
                  <div className="btn-text">Explore More</div>
                  <div className="btn-text hover hidden">Explore More</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
