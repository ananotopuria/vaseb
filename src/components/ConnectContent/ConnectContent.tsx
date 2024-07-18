/* eslint-disable prettier/prettier */
import styles from './ConnectContent.module.css';

const ConnectContent = () => {
  return (
    <div className={styles.connectContent}>
      <div>
        <h1 className={styles.connectContentTitle}>Let's Connect</h1>
        <p className={styles.connectContentDesc}>
          We're here to help! Reach out to us via phone, email, or visit us in
          person at our showroom.
        </p>
      </div>
      <img
        className={styles.responseImage}
        src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a83a3afc04489e01754e5_contact.jpg"
        alt="Connect Image"
      />
      <div className={styles.socials}>
        <span>Follow us</span>
        <a href="https://x.com/">
          <img
            src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/667671486617805c99b49da5_twitter-icon.svg"
            alt="x"
          />
        </a>
        <a href="https://facebook.com/">
          <img
            src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a847a985ca732278904e3_ic-follow-02.svg"
            alt="facebook"
          />
        </a>
        <a href="https://youtube.com/">
          <img
            src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a847adb7dd63e95011ec9_ic-follow-03.svg"
            alt="youtube"
          />
        </a>
        <a href="https://instagram.com/">
          <img
            src="https://cdn.prod.website-files.com/660ff1d8ec321c4cd89cafa4/666a847a2ac18d3f287345b5_ic-follow-04.svg"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default ConnectContent;
