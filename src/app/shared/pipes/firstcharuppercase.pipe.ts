import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharUppercase'
})
export class FirstCharUppercasePipe implements PipeTransform {
  transform(string: string) {
    return string[0].toUpperCase() + string.slice(1);
  }
}
