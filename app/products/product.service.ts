import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/Operator/map';
import 'rxjs/add/Operator/catch';
import 'rxjs/add/Operator/do';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl: string = 'api/products/products.json';

    constructor(private _http: Http){}
    getProducts() : Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                    .map( (response: Response) => <IProduct[]>response.json())
                    .do ( data => console.log(`All products: ${JSON.stringify(data)} `) )
                    .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error.');
    }
}