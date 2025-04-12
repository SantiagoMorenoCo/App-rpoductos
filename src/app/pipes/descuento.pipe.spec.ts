import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {
  transform(precio: number, tieneDescuento: boolean): string {
    if (tieneDescuento) {
      const precioConDescuento = precio * 0.85;
      return `<s class="text-muted me-2">\$${precio.toFixed(2)}</s><strong class="text-success">\$${precioConDescuento.toFixed(2)}</strong>`;
    }
    return `\$${precio.toFixed(2)}`;
  }
}
