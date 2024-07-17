export class ProductModel{
    id: number ;
    name:string;
    currency:string;
    price:number;
    imageUrl:string;
    description:string;
    quantity:number;
    category:number;

    constructor(init?: Partial<ProductModel>) {
		Object.assign(this, init);
	}
}