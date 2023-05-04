import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard {
    constructor(private tokenService: TokenService, private router: Router) { }

    //Si no está logueado prohíbe ingresar a la URL protegida
    canActivate(): boolean | Promise<boolean> {
        const token = this.tokenService.getToken();
        return token ? !!token : (this.router.navigate(['']), false);
    }      
}