import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class InterceptorServiceService {
    constructor(private tokenService: TokenService) { }

    //Interceptar cada solicitud HTTP y agregar el token de autenticación al encabezado
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let intReq = req;
        const token = this.tokenService.getToken();
        if (token != null) {
            intReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)
            });
        }
        return next.handle(intReq);
    }
}

//Se exporta a app.module.ts
export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorServiceService,
    multi: true
}];