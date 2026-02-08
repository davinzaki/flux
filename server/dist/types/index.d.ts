export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
}
export interface User {
    id: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface JWTUser {
    id: string;
    email: string;
    name: string;
    role: string;
}
export interface Category {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
}
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    images: JSON;
    createdAt: Date;
}
