import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productos = this.productService.getProductos();
  }

  eliminarProducto(index: number) {
    this.productService.eliminarProducto(index);
    this.productos = this.productService.getProductos(); // Recargar lista
  }
}
