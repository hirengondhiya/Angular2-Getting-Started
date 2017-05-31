import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IProduct } from './product'
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product Detail';
    prodSubscription : Subscription;
    product: IProduct;
    id: number;
    errorMessage: string;
    messages: string[] = [];

    constructor(private _activatedRoute: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService
                ){}

    ngOnInit() : void {
        this.id = +this._activatedRoute.snapshot.params['id'];
        // this.pageTitle += ` : ${this.id} `;
        this.prodSubscription = this._productService
                                    .getProduct(this.id)
                                    .subscribe(
                                        product => this.product = product,
                                        error => this.errorMessage = <any>error
                                    );
    }

    ngOnDestroy(): void{
        this.prodSubscription.unsubscribe();
    }

    onBack() : void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string){
        this.messages.push(message);
    }
}