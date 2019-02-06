import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform (duration: number) {
    if (duration) {
      const hours = (duration - duration % 60) / 60;
      const mins = duration % 60;

      return (hours ? hours + 'h ' : '') + mins + 'min';
    }
    return '';
  }
}
