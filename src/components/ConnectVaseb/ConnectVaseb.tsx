/* eslint-disable prettier/prettier */

import ContentBox from './ContentBox';
import ImageBox from './ImageBox';
import styles from './ConnectVaseb.module.css';

const ConnectVaseb = () => {
  return (
    <div className={styles.ConnectVaseb}>
      <div className={styles.connectVasebContent}>
        <h2>Let's begin the connect with vaseb!</h2>
        <p>
          Are you ready to turn your home decor dreams into reality? We're here
          to help you every step of the way.
        </p>
        <button>shop now</button>
      </div>
      <div className={styles.connectBoxes}>
        <ContentBox
          info="info@example.com"
          iconUrl="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a942a15ce0cc9f385c81b_ic-email.svg"
          message="Send us a message"
          status="(480) 555-0103"
          isEmail
          isNumber
        />
        <ImageBox
          src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a93cb80e7dbb64900c902_contact-02.jpg"
          alt="imageBox1"
        />
        <ImageBox
          isHidden
          src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a93cabdd268378c5b5bbc_contact-03.jpg"
          alt="imageBox2"
        />
        <ContentBox
          info="4517 Washington Ave."
          iconUrl="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a942a948e182bf27beed0_ic-location.svg"
          message="Address"
          status="Manchester, Kentucky 39495"
        />
      </div>
    </div>
  );
};

export default ConnectVaseb;
