import { Product } from "../model/product";
import '../css/product.css';

export const DisplayProduct = ({product,number}:{product:Product, number: number}) => {

    return(
        <>
            <figure className="product-figure">
                <a href={product.imagePath} target="_blank" rel="noopener noreferrer">
                  <img src={product.imagePath} alt="Product image failed to load." />
                </a>
                <figcaption>
                    <h3>{number}. {product.name}</h3>
                    <p>{product.price}</p>
                </figcaption>
            </figure>
        </>
    );
}