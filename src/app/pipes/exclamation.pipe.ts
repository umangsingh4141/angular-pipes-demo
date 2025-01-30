import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclamation'
})
export class ExclamationPipe implements PipeTransform {

  transform(value: string, count: number = 1): string {
    return value + '!'.repeat(count);
  }

}
