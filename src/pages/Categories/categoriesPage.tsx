import styles from './categoriesPage.module.css';

interface Category {
  name: string;
  href: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    name: 'Clocks',
    href: '/category/clock',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae301e4d9af43cd5b4f97_category-06.jpg',
  },
  {
    name: 'Sofas',
    href: '/category/sofas',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2b818b5623fef33ee2a_category-01.jpg',
  },
  {
    name: 'Tables',
    href: '/category/tables',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2ca4fa5c390dbbb79d2_category-02.jpg',
  },
  {
    name: 'Chairs',
    href: '/category/chairs',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2d88e839b736134ea83_category-03.jpg',
  },
  {
    name: 'Lamps',
    href: '/category/lamps',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2e70007c60f49da9eb0_category-04.jpg',
  },
  {
    name: 'Vases',
    href: '/category/vases',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae2f3911a07e0e1e81db7_category-05.jpg',
  },
  {
    name: 'Bookcases',
    href: '/category/bookcases',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae30fc88c72a0eeda6c73_category-07.jpg',
  },
  {
    name: 'Wardrobes',
    href: '/category/wardrobes',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae31bda6c6b5d2cd81ae6_category-08.jpg',
  },
  {
    name: 'Beds',
    href: '/category/beds',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae329a2dd970e146ab60e_category-09.jpg',
  },
  {
    name: 'Desk',
    href: '/category/desk',
    imageUrl:
      'https://cdn.prod.website-files.com/6669485244744612b78d02e5/666ae336a3165a0ff3f9b80a_category-10.jpg',
  },
];

const CategoriesPage: React.FC = () => {
  return (
    <div>
      <div className={styles.categoryWrapper}>
        <h1 className={styles.categoryTitle}>Our Categories</h1>
        <div className={styles.categoryList}>
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
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
            </a>
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
