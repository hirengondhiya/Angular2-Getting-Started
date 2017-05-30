import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: [ 'product-list.component.css']
})
export class ProductListComponent 
                            implements OnInit{
    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: string = "Products List";
    showImage: boolean = false;
    productFilter: string;
    messages: string[] = [];
    products: IProduct[];

    constructor(private _productService: ProductService){}

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        console.log('On init: Product component');
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message:string) : void {
        this.messages.push(message);
    }
}