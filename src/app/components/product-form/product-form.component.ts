import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categorias = ['Electrónicos', 'Alimentos', 'Ropa', 'Hogar'];

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      fechaCaducidad: ['', [Validators.required]],
      categoria: ['', Validators.required],
      tieneDescuento: [false]
    });
  }

  agregarProducto() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const producto: Producto = {
      ...this.productForm.value,
      fechaCaducidad: new Date(this.productForm.value.fechaCaducidad)
    };

    this.productService.agregarProducto(producto);
    this.productForm.reset();
  }

  campoInvalido(campo: string): boolean {
    const control = this.productForm.get(campo);
    return control?.invalid && control?.touched;
  }
}
