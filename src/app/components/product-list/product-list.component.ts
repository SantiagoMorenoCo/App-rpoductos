import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productos = this.productService.getProductos();
  }

  eliminarProducto(index: number) {
    this.productService.eliminarProductos(index);
    this.productos = this.productService.getProductos(); // Recargar lista
  }
}