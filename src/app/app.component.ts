// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductFormComponent,
    ProductListComponent,
    
  ],
  template: `
    <div class="container mt-4">
      <h1 class="mb-4">Gestión de Productos</h1>
      
      <div class="row">
        <div class="col-md-4 mb-4">
          <app-product-form></app-product-form>
        </div>
        <div class="col-md-4 mb-4">
          <app-product-list></app-product-list>
        </div>
        <div class="col-md-4 mb-4">
          <app-cart></app-cart>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'productos-app';
}