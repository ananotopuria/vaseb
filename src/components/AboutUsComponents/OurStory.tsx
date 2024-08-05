import img1 from './../../../public/images/about1.jpg';
import img2 from './../../../public/images/about2.jpg';
import img3 from './../../../public/images/about3.jpg';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

function OurStory() {
  return (
    <section className="our-story container">
      <div className="flex">
        <div className="story-content">
          <div className="flex-1">
            <p>
              At Vaseb, we believe that your home should be a reflection of your
              personal style and a sanctuary of comfort and functionality.
            </p>
            <img src={img1} alt="about us" />
          </div>
          <div className="flex-1">
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
          <div className="flex-1">
            <img src={img3} alt="about us" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
