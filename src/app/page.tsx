import styles from "./css/page.module.css";
import "./css/table.css";
import {getProducts} from './actions/data';
import { Product } from "./model/appiData.interface";
import { DisplayProduct } from "./actions/display";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="products-table">
        {products && products.length > 0 && 
          products.map((product, index) => (
            <DisplayProduct key={index} product={product} number={index+1} />
          ))
        }
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
