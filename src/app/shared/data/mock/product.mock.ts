import { ProductModel } from '../../models';

export const PRODUCTS: ProductModel[] = [
  new ProductModel({
    id: 1,
    name: 'White Pottery',
    price: 115.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd697293a42033e568b25_5bb4c684f487b425339a65e2_maarten-deckers-295105-unsplash-(1).png',
    description: 'Elegant white pottery.',
    quantity: 10,
    category: 1,
  }),
  new ProductModel({
    id: 2,
    name: 'Wine Pottery',
    price: 95.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd79bf8cd664d38cc48ab_5bb39e2dc6cc6cdb0355888c_oriento-736470-unsplash.png',
    description: 'Beautiful wine-colored pottery.',
    quantity: 15,
    category: 1,
  }),
  new ProductModel({
    id: 3,
    name: 'Wine Bowl',
    price: 115.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd7c20752870b0e9dbbb4_5bb3c9aa716fd5a690653264_oriento-704252-unsplash-1.png',
    description: 'Wine bowls for every occasion.',
    quantity: 8,
    category: 2,
  }),
  new ProductModel({
    id: 4,
    name: 'Mint Pottery',
    price: 75.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd7f0e364e976af8fed4d_5bb3df47aa273fe65085a78f_oriento-663905-unsplash-p-1600.png',
    description: 'Refreshing mint pottery.',
    quantity: 20,
    category: 1,
  }),
  new ProductModel({
    id: 5,
    name: 'Set Of Pottery',
    price: 125.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd7f879491efbeb9d8269_5bb3d671edf33b1f76f5aa0d_modern-essentials-792823-unsplash.png',
    description: 'A complete set of pottery.',
    quantity: 5,
    category: 3,
  }),
  new ProductModel({
    id: 6,
    name: 'Orange Ceramic',
    price: 55.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd804f8cd66eab8cc490c_5bb3febae6340f5ff015e85b_blouse.png',
    description: 'Bright orange ceramic.',
    quantity: 12,
    category: 1,
  }),
  new ProductModel({
    id: 7,
    name: 'Dark Bowl',
    price: 115.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd80e7ddaf62b3e2460bb_5bb3cedbb3465c5181324caa_212-unsplash-(1).png',
    description: 'Dark bowls for stylish homes.',
    quantity: 7,
    category: 2,
  }),
  new ProductModel({
    id: 8,
    name: 'Square Pottery',
    price: 75.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd819e364e903ba8fee0c_5bb3c9f370f1175d66fc5d5a_oriento-663881-unsplash.png',
    description: 'Unique square pottery.',
    quantity: 10,
    category: 1,
  }),
  new ProductModel({
    id: 9,
    name: 'Black Pottery',
    price: 115.0,
    currency: 'USD',
    imageUrl:
      'https://assets-global.website-files.com/5bb39a4bdeee4e1e1f49f800/5bbbd82e293a42a5ae568cb7_5bb3c94670f1175192fc5cdf_oriento-663907-unsplash-1.png',
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
