import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let anyo = null;
    let mes = null;
    let dia = null;

    if (typeof value === 'string' && value.indexOf('-') > -1) {
      const str = value.split('-');
      dia = Number(str[2]);
      mes = Number(str[1]);
      anyo = Number(str[0]);
    } else if (typeof value === 'string' && value === '') {
      return '';
    }

    const format = (args && args.length > 0)
      ? args[0].toString().toUpperCase()
      : 'NORMAL';

    switch (format) {
      case 'YEAR':
        return anyo;
      case 'BEAUTY':
        return dia + ' ' + this.getMonthName(mes) + ', ' + anyo;
      case 'NORMAL':
      default:
        return dia + '/' + mes + '/' + anyo;
    }
  }

  getMonthName(month: number): string {
    switch (month) {
      case 1:
        return 'Enero';
      case 2:
        return 'Febrero';
      case 3:
        return 'Marzo';
      case 4:
        return 'Abril';
      case 5:
        return 'Mayo';
      case 6:
        return 'Junio';
      case 7:
        return 'Julio';
      case 8:
        return 'Agosto';
      case 9:
        return 'Septiembre';
      case 10:
        return 'Octubre';
      case 11:
        return 'Noviembre';
      case 12:
        return 'Diciembre';
      default:
        return 'Enero';
    }
  }

}
