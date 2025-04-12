import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductos(): import("../models/producto.model").Producto[] {
    throw new Error('Method not implemented.');
  }
  private products = signal<Product[]>([]);
  private nextId = 1;
  eliminarProductos: any;

  getProducts() {
    return this.products;
  }

  addProduct(product: Omit<Product, 'id'>) {
    const newProduct = {
      id: this.nextId++,
      ...product
    };
    
    this.products.update(current => [...current, newProduct]);
    return newProduct;
  }

  deleteProduct(id: number) {
    this.products.update(current => current.filter(p => p.id !== id));
  }
}