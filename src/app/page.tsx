import styles from "./css/page.module.css";
import "./css/table.css";
import { products} from './data/products';
import { Product } from "./model/product";
import { DisplayProduct } from "./components/display";

export default async function Home() {

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
