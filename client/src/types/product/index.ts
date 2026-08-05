
export interface productCardPropsTypes {
    productId: string,
    name: string
    imageUrl: string
    description: string
    rating: number
    brand: string
    weight: number
    sugar: number
    categoryId: string
    price: number
    stockQuantity: number
    feedbacks: []
}


export type ProductResponse = {
  sugar: number;
  ageRestriction: number;
  brand: string;
  category: string | null;
  categoryId: string;
  createdAt: string;
  description: string;
  feedbacks: any[];
  imageUrl: string;
  name: string;
  price: number;
  productId: string;
  rating: number;
  stockQuantity: number;
  updatedAt: string;
  weight: number;
};

export type Product = {
    productId: string;
    name: string;
    imageUrl: string;
    description: string;
    brand: string;
    weight: number;
    sugar: number;
    categoryId?: string;
    price: number;
    stockQuantity: number;
};