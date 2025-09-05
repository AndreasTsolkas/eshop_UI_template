import styles from "./css/page.module.css";
import "./css/table.css";
import {getProducts, getFilteredProducts} from './actions/data';
import { Product } from "./interfaces/appiData.interface";
import { DisplayProduct } from "./actions/display";

export default async function Home() {
  const products = await getProducts(), filterField: keyof Product = 'active', filterValue = true;;
  let filteredProducts: Product[] | null = null;

  if(products) 
    filteredProducts = await getFilteredProducts(products, filterField, filterValue);
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="products-table">
        {filteredProducts && filteredProducts.length > 0 && 
          filteredProducts.map((product, index) => (
            <DisplayProduct key={index} product={product} number={index+1} />
          ))
        }
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
