import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos: Producto[] = [];

  constructor() {
    const almacenados = localStorage.getItem('productos');
    this.productos = almacenados ? JSON.parse(almacenados) : [];
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
    this.actualizarStorage();
  }

  getProductos(): Producto[] {
    return [...this.productos]; 
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
    this.actualizarStorage();
  }

  private actualizarStorage() {
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }
}
