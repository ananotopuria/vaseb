/* eslint-disable prettier/prettier */
import styles from './ConnectContent.module.css';
import Facebook from './svg/FacebookSvg';
import Instagram from './svg/InstagramSvg';
import Twitter from './svg/TwitterSvg';
import Youtube from './svg/YoutubeSvg';

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
          <Twitter />
        </a>
        <a href="https://facebook.com/">
          <Facebook />
        </a>
        <a href="https://youtube.com/">
          <Youtube />
        </a>
        <a href="https://instagram.com/">
          <Instagram />
        </a>
      </div>
    </div>
  );
};

export default ConnectContent;
