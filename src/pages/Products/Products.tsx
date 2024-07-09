/* eslint-disable prettier/prettier */
import styles from "./Products.module.css"
import { useParams } from 'react-router-dom';
import { categories } from '../Categories/categoriesData';


const Products = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const category = categories.find(cat => cat.name.toLowerCase() === categoryName?.toLowerCase());

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.productsTitle}>{category.name}</h1>
      <div className={styles.productsWrapper}>
        {category.products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className={styles.productsImg} />
            <h3 >  {product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;