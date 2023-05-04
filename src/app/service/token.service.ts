import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    roles: Array<string> = [];

    //Guardar el token
    public setToken(token: string): void {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    //Obtener el token
    public getToken(): string {
        return localStorage.getItem(TOKEN_KEY)!;
    }

    //Guardar el nombre de usuario
    public setUserName(userName: string): void {
        window.localStorage.removeItem(USERNAME_KEY);
        window.localStorage.setItem(USERNAME_KEY, userName);
    }

    //Obtener el nombre de usuario
    public getUserName(): string {
        return localStorage.getItem(USERNAME_KEY)!;
    }

    //Guardar los roles
    public setAuthorities(authorities: string[]): void {
        window.localStorage.removeItem(AUTHORITIES_KEY);
        window.localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    //Obtener los roles
    public getAuthorities(): string[] {
        this.roles = [];
        if (localStorage.getItem(AUTHORITIES_KEY)) {
            JSON.parse(localStorage.getItem(AUTHORITIES_KEY)!).forEach((authority: any) => {
                this.roles.push(authority.authority);
            });
        }
        return this.roles;
    }

    //Limpiar todos los elementos del almacenamiento local al salir
    public logOut(): void {
        window.localStorage.clear();
    }
}