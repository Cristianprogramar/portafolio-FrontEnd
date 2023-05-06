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
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    //Obtener el token
    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY)!;
    }

    //Guardar el nombre de usuario
    public setUserName(userName: string): void {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, userName);
    }

    //Obtener el nombre de usuario
    public getUserName(): string {
        return sessionStorage.getItem(USERNAME_KEY)!;
    }

    //Guardar los roles
    public setAuthorities(authorities: string[]): void {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    //Obtener los roles
    public getAuthorities(): string[] {
        this.roles = [];
        if (sessionStorage.getItem(AUTHORITIES_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority: any) => {
                this.roles.push(authority.authority);
            });
        }
        return this.roles;
    }

    //Limpiar todos los elementos del almacenamiento local al salir
    public logOut(): void {
        window.sessionStorage.clear();
    }
}