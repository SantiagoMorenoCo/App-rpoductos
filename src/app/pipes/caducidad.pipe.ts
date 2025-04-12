import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caducidad'
})
export class CaducidadPipe implements PipeTransform {
  transform(fecha: Date): string {
    const hoy = new Date();
    const fechaCaducidad = new Date(fecha);
    const diff = Math.ceil((fechaCaducidad.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    if (diff < 5) {
      return `<span class="text-danger fw-bold">¡Caduca pronto!</span>`;
    }

    return `Válido hasta ${fechaCaducidad.toLocaleDateString('es-ES')}`;
  }
}
