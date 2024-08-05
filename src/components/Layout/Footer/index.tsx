const Footer: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src="https://www.thespruce.com/thmb/cBb8kUTiCPKaMjYSu2IMkUhbwOo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01.737ParkAvenuebyChangoCo.-LivingRoomWideR1-fa4deea9615743c996d3eee70a6d0573.jpg"
            alt="furniture"
            className="w-full h-[50vh] object-cover"
          />
          <div className="absolute p-20 inset-0 text-center items-center text-white bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Browse modern today!</h1>
            <p className="text-lg md:text-2xl text-center">
              Dive into our curated collection of contemporary furniture and decor, meticulously designed to elevate your living spaces.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white font-sans">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h2 className="uppercase font-bold mb-4">Company</h2>
              <ul>
                {['About us', 'Shop', 'Blogs', 'Reviews', 'Stores', 'Contact us', 'FAQ'].map((item) => (
                  <li key={item} className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h2 className="uppercase font-bold mb-4">Resources</h2>
              <ul>
                {['Style Guide', 'Privacy Policy', 'Terms & Conditions', 'Return Policy', 'Licensing', 'Contact us', 'Changelog'].map((item) => (
                  <li key={item} className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h2 className="uppercase font-bold mb-4">Connected</h2>
              <ul className="space-y-2">
                {[
                  { name: 'Instagram', icon: 'fab fa-instagram' },
                  { name: 'Facebook', icon: 'fab fa-facebook-f' },
                  { name: 'YouTube', icon: 'fab fa-youtube' },
                  { name: 'Twitter', icon: 'fab fa-twitter' },
                ].map((item) => (
                  <li key={item.name}>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center space-x-2">
                      <i className={item.icon}></i>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="uppercase font-bold mb-4">Join Our Mailing List</h2>
            <div className="mb-4 text-gray-400">
              Stay up-to-date with the latest news, and design.
            </div>
            <form className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <label htmlFor="ft-email" className="sr-only">Email Address</label>
              <input
                type="email"
                id="ft-email"
                className="w-full md:w-auto flex-grow px-4 py-2 border border-gray-600 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-gray-400"
                placeholder="Enter your email"
              />
              <button type="submit" className="px-4 py-2 bg-white text-black font-bold">Subscribe</button>
            </form>
            <div className="mt-4 flex items-start">
              <input type="checkbox" id="promo-emails" className="mr-2" />
              <label htmlFor="promo-emails" className="text-gray-400 text-sm">
                I agree to receive promotional emails from Modern Living.
              </label>
            </div>
          </div>
        </div>
        <div className="bg-black border-t border-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600">&copy; 2024 Vaseb. All rights reserved.</div>
            <div className="text-gray-600 mt-2 md:mt-0">
              Designed by Nixar. Powered by Webflow.
            </div>
            <a href="#" className="mt-2 md:mt-0 bg-white text-black px-4 py-2 rounded text-sm flex items-center">
              <img src="webflow.svg" alt="Webflow" className="mr-2" />GET TEMPLATE
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
