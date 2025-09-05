
import axios from 'axios';

import { ApiData, Product } from '../interfaces/appiData.interface';
import { dataUrl } from '../important/data.source';
import * as Messages from '../important/messages';

const getApiData = async (): Promise<ApiData | null> => {
    try {
        const response = await axios.get<ApiData>(dataUrl);
        return response.data;  
    } catch (error) {
        console.error(Messages.errorApiFetching, error);
        return null;  
    }
}

export const getProducts = async (): Promise<Product[] | null> => {
    try {
        const apiData = await getApiData();
        if (!apiData) return null;
        return Object.values(apiData.products) || null; // Με τη χρήση της Object.values επιστρέφω array αντί για object
    } catch (error) {
        console.error(Messages.errorProductFetching, error);
        return null;
    }
}

export const getFilteredProducts = async (products: Product[], field: keyof Product, value: unknown): Promise<Product[] | null> => {
    try {
        const filteredProducts = products.filter(product => product[field] === value);
        return filteredProducts.length > 0 ? filteredProducts : null; 
    } catch (error) {
        console.error("Error fetching products:", error); 
        return null;
    }
}