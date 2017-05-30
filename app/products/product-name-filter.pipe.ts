import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productNameFilter'
})
export class ProductNameFilterPipe implements PipeTransform{
    transform(value: IProduct[], productFilter: string) : IProduct[]{
        productFilter = productFilter? productFilter.toLocaleLowerCase() : null;

        return productFilter? value.filter( (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(productFilter) != -1 ) : value;
    }
}