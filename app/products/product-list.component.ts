import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

import { Subscription } from 'rxjs/Subscription'

@Component({
    moduleId: module.id,
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: [ 'product-list.component.css']
})
export class ProductListComponent 
                            implements OnInit, OnDestroy{
    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: string = "Products List";
    showImage: boolean = false;
    productFilter: string;
    messages: string[] = [];
    products: IProduct[];
    productSubscription: Subscription;
    errorMessage: string;


    constructor(private _productService: ProductService){}

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        console.log('On init: Product component');
        this.productSubscription = this._productService
                                        .getProducts()
                                        .subscribe(
                                            products => this.products = products,
                                            error => this.errorMessage = <any>error
                                        );
    }

    ngOnDestroy() : void {
        this.productSubscription.unsubscribe();
    }

    onRatingClicked(message:string) : void {
        this.messages.push(message);
    }
}