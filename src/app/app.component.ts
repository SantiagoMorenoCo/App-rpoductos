import { Component } from '@angular/core';
import { Producto } from './models/producto.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: any;
  constructor(private productService: ProductService) {}

  agregarProducto(producto: Producto) {
    this.productService.agregarProducto(producto);
  }
}
