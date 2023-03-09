import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitalDisplay'
})
export class DigitalDisplayPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    return value < 10 ? "0" + value : value.toString();
  }

}
