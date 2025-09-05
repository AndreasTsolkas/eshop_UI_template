
import axios from 'axios';

import { Photo, Product } from '../model/appiData.interface';
import { photosUrl } from '../important/data.source';
import { randomGeneratePrice } from '../utils/calculations';
import * as Messages from '../important/messages';

const getPhotos = async (): Promise<Photo[] | null> => {
    try {
        const response = await axios.get<Photo[]>(photosUrl);
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
        const products: Product[] = photos.map(photo => ({
            id: Number(photo.id),
            name: photo.title,
            price: randomGeneratePrice(),
            imagePath: photo.url
        }));

        return products;
    } catch (error) {
        console.error(Messages.errorProductFetching, error);
        return null;
    }
};