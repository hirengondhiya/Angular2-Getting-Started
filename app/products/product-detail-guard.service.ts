import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router){}
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.params['id'];
        if (isNaN(id) || id < 1){
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}