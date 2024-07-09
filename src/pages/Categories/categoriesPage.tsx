import styles from './categoriesPage.module.css';
import { Link } from 'react-router-dom';
import { categories } from "./categoriesData";

const CategoriesPage: React.FC = () => {
  return (
    <div>
      <div className={styles.categoryWrapper}>
        <h1 className={styles.categoryTitle}>Our Categories</h1>
        <div className={styles.categoryList}>
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/starter_project/shop/category/${category.name.toLowerCase()}`}
              className={styles.categoryBlock}
            >
              <div className={styles.categoryImg}>
                <img
                  src={category.imageUrl}
                  alt={`${category.name} Category`}
                  className={styles.categoryImage}
                />
              </div>
              <div className={styles.categoryName}>{category.name}</div>
            </Link>
          ))}
        </div>
      </div>
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
    </div>
  );
};

export default CategoriesPage;
