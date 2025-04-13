import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categorias: string[] = ['Alimentos', 'Electrónica', 'Ropa', 'Hogar', 'Otros'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      fechaCaducidad: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  campoInvalido(campo: string): boolean {
    const control = this.productForm.get(campo);
    return !!control && control.invalid && control.touched;
  }

  guardarProducto(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    
    console.log('Producto guardado', this.productForm.value);
    this.productForm.reset();
  }
}