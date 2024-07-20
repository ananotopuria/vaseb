import styles from '../../../pages/Categories/categoriesPage.module.css';
import { Link } from 'react-router-dom';

export default function ModernToday() {
   return (
      <section className="hero ">
         <div className={styles.imgWrapper}>
            <div>
               <img
                  src="https://www.thespruce.com/thmb/cBb8kUTiCPKaMjYSu2IMkUhbwOo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01.737ParkAvenuebyChangoCo.-LivingRoomWideR1-fa4deea9615743c996d3eee70a6d0573.jpg"
                  alt="furniture"
                  className={styles.fixedImage}
               />
               <div className={styles.imageText}>
                  <h1 className={styles.imgTitle}>Browse modern today!</h1>
                  <p className={styles.imgP}>
                     Dive into our curated collection of contemporary furniture and
                     decor, meticulously designed to elevate your living spaces.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
