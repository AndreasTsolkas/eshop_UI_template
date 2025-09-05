
import { Product } from '../model/product';

export const products: Product[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: parseFloat((Math.random() * 100).toFixed(2)),
  active: Math.random() > 0.5,
  imagePath: `https://picsum.photos/seed/${i + 1}/600/400`
}));