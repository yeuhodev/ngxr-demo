import { ProductModel } from '../../models';

export const PRODUCTS: ProductModel[] = [
  new ProductModel({
    id: 1,
    name: 'White Pottery',
    price: 115.0,
    currency: 'USD',
    imageUrl: 'assets/white-pottery.jpg',
    description: 'Elegant white pottery.',
    quantity: 10,
    category: 1,
  }),
  new ProductModel({
    id: 2,
    name: 'Wine Pottery',
    price: 95.0,
    currency: 'USD',
    imageUrl: 'assets/wine-pottery.jpg',
    description: 'Beautiful wine-colored pottery.',
    quantity: 15,
    category: 1,
  }),
  new ProductModel({
    id: 3,
    name: 'Wine Bowl',
    price: 115.0,
    currency: 'USD',
    imageUrl: 'assets/wine-bowl.jpg',
    description: 'Wine bowls for every occasion.',
    quantity: 8,
    category: 2,
  }),
  new ProductModel({
    id: 4,
    name: 'Mint Pottery',
    price: 75.0,
    currency: 'USD',
    imageUrl: 'assets/mint-pottery.jpg',
    description: 'Refreshing mint pottery.',
    quantity: 20,
    category: 1,
  }),
  new ProductModel({
    id: 5,
    name: 'Set Of Pottery',
    price: 125.0,
    currency: 'USD',
    imageUrl: 'assets/set-of-pottery.jpg',
    description: 'A complete set of pottery.',
    quantity: 5,
    category: 3,
  }),
  new ProductModel({
    id: 6,
    name: 'Orange Ceramic',
    price: 55.0,
    currency: 'USD',
    imageUrl: 'assets/orange-ceramic.jpg',
    description: 'Bright orange ceramic.',
    quantity: 12,
    category: 1,
  }),
  new ProductModel({
    id: 7,
    name: 'Dark Bowl',
    price: 115.0,
    currency: 'USD',
    imageUrl: 'assets/dark-bowl.jpg',
    description: 'Dark bowls for stylish homes.',
    quantity: 7,
    category: 2,
  }),
  new ProductModel({
    id: 8,
    name: 'Square Pottery',
    price: 75.0,
    currency: 'USD',
    imageUrl: 'assets/square-pottery.jpg',
    description: 'Unique square pottery.',
    quantity: 10,
    category: 1,
  }),
  new ProductModel({
    id: 9,
    name: 'Black Pottery',
    price: 115.0,
    currency: 'USD',
    imageUrl: 'assets/black-pottery.jpg',
    description: 'Sleek black pottery.',
    quantity: 9,
    category: 1,
  }),
];

export function getProducts(): ProductModel[] {
  return PRODUCTS;
}

export function getProductById(id: number): ProductModel {
  const item = PRODUCTS.find((val) => val.id === id);
  return item ?? new ProductModel();
}
