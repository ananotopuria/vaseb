import img1 from './../../../public/images/about1.jpg';
import img2 from './../../../public/images/about2.jpg';
import img3 from './../../../public/images/about3.jpg';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

function OurStory() {
  const milestones = [
    {
      year: 2023,
      description:
        'Launch of our eco-friendly product line, emphasizing sustainability.',
    },
    {
      year: 2022,
      description:
        'Introduction of smart home products, integrating technology with design.',
    },
    {
      year: 2021,
      description:
        'Vaseb set out to curate a collection of furniture and decor that resonates with the ethos of modernity.',
    },
  ];

  return (
    <div className="our-story mt-6">
      <div className="container">
        <div className="sub-title">
          <img
            src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a81442e040719153851c2_ic-subtitle.svg"
            alt="Subtitle Icon"
          />
          <div>
            <h5>about us</h5>
          </div>
        </div>
        <h2 className="main-title">Our Story</h2>
      </div>
      <div className="flex flex-row justify-center align-middle">
        <div className="story-content">
          <div>
            <p>
              At Vaseb, we believe that your home should be a reflection of your
              personal style and a sanctuary of comfort and functionality.
            </p>
            <img src={img1} alt="about us" />
          </div>
          <div>
            <img src={img2} alt="about us" />
            <ul>
              <li>
                <IoCheckmarkDoneCircleOutline />
                Easy returns and post-purchase support.
              </li>
              <li>
                <IoCheckmarkDoneCircleOutline />
                Encouragement to explore collections and trends.
              </li>
              <li>
                <IoCheckmarkDoneCircleOutline />
                Emphasis on quality and craftsmanship.
              </li>
            </ul>
          </div>
          <div>
            <img src={img3} alt="about us" />
          </div>
        </div>
      </div>
      <div className="milestones__table">
        <div className="milestone__table-content">
          <h3 className="milestone__table-milestones">Milestones</h3>
          <p className="milestone__table-title">Our journey to vaseb</p>
          <p className="milestone__table-txt">
            Vaseb started with a simple yet profound vision: to revolutionize
            home decor by integrating modern design with smart technology. Our
            founders, passionate about design and innovation.
          </p>
        </div>
        <div className="milestones__journey">
          {milestones.map((milestone, index) => (
            <div className="milestones__journey-content" key={index}>
              <p className="milestones__journey-year">{milestone.year}</p>
              <p className="milestones__journey-description">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <section className="vision">
        <h2>Our Vision & Mission</h2>
        <p>
          To curate and deliver exceptional products that embody the essence of
          contemporary living, enriching homes with sophistication, comfort,
          sustainability, and intelligent design.
        </p>
        <p>
          To redefine modern living by seamlessly blending innovation, style, &
          functionality, creating spaces that inspire and elevate the human
          experience.
        </p>
      </section>
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="member">
          <h3>Esther Howards</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="member">
          <h3>Ronald Richard</h3>
          <p>Team Leader</p>
        </div>
        <div className="member">
          <h3>Bessie Cooper</h3>
          <p>Sales Executive</p>
        </div>
        <div className="member">
          <h3>Cameron Williamson</h3>
          <p>Marketing Manager</p>
        </div>
      </section>
      <section className="features">
        <h2>Features</h2>
        <div className="feature">
          <h3>Order Tracking</h3>
          <p>Track real time your order</p>
        </div>
        <div className="feature">
          <h3>Free Shipping</h3>
          <p>You will love at great low prices</p>
        </div>
        <div className="feature">
          <h3>Flexible Payment</h3>
          <p>Pay with Multiple Credit Cards</p>
        </div>
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Experience the joy of fast shipping</p>
        </div>
        <div className="feature">
          <h3>Premium Support</h3>
          <p>Outstanding premium support</p>
        </div>
      </section>
    </div>
  );
}

export default OurStory;
