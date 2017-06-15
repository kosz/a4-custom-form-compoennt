import { Pipe, PipeTransform } from '@angular/core';

const transform = (value: any, args?: any[]): any[] =>
    !!value ? Object.keys(value) : [];

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform = transform;
}
