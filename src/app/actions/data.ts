
import axios from 'axios';

import { Photo, Product } from '../model/appiData.interface';
import { photosUrl } from '../important/data.source';
import { randomGeneratePrice } from '../utils/calculations';
import * as Messages from '../important/messages';

const getPhotos = async (): Promise<Photo[] | null> => {
    try {
        const response = await axios.get<Photo[]>(photosUrl);
        console.log(response);
        return response.data;  
    } catch (error) {
        console.error(Messages.errorApiFetching, error);
        return null;  
    }
}

export const getProducts = async (): Promise<Product[] | null> => {
    try {
        const photos: Photo[] | null = await getPhotos();
        if (!photos) return null;
        

        return products;
    } catch (error) {
        console.error(Messages.errorProductFetching, error);
        return null;
    }
};

export const products: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: parseFloat((Math.random() * 100).toFixed(2)),
  active: Math.random() > 0.5,
  imagePath: `https://picsum.photos/seed/${i + 1}/600/400`, // working Picsum image
}));