import { Product } from "../interfaces/appiData.interface";
import { imageBaseUrl } from "../important/data.source";
import '../css/product.css';

export const DisplayProduct = ({product,number}:{product:Product, number: number}) => {

    const imageUrl = imageBaseUrl+product.imagePath;

    return(
        <>
            <figure className="product-figure">
                <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                  <img src={imageUrl} alt="Product image failed to load." />
                </a>
                <figcaption>
                    <h3>{number}. {product.name}</h3>
                    <p>{product.price}</p>
                </figcaption>
            </figure>
        </>
    );
}