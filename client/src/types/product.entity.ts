export interface Product {
  _id: string;
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  images: string[];
  createdAt: Date;
}
