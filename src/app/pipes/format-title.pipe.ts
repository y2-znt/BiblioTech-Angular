import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle',
  standalone: true,
})
export class FormatTitlePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
