import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    const format = (args && args.length > 0)
      ? args[0].toString().toUpperCase()
      : 'MIN';

    if (value == null) {
      return '-';
    }

    let minutosF = null;
    switch (format) {
      case 'MIN':
        minutosF = value > 9 ? value : '0' + value;
        return minutosF + 'm';
      case 'BEAUTY':
        const temp = value * 60;
        const horas = Math.floor(value / 60);
        const minutos: number = Math.floor(value % 60);
        minutosF = minutos > 9 ? minutos : '0' + minutos;
        return horas + 'h ' + minutosF + 'm';
    }
  }

}
