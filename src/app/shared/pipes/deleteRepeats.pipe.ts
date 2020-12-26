import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'deleteRepeats'
})

export class DeleteRepeatsPipe implements PipeTransform {
    transform(products: any, ...args: any[]): any {
        return ([...new Set (products)]);
    }
}
