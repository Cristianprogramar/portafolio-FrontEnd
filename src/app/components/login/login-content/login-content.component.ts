import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-login-content',
    templateUrl: './login-content.component.html',
    styleUrls: ['./login-content.component.scss']
})

export class LoginContentComponent implements OnInit {

    isLogged = false;
    isLogginFail = false;
    loginUsuario!: LoginUsuario;
    nombreUsuario!: string;
    password!: string;
    roles: string[] = [];
    errMsj!: string;
    errorMessage!: string;

    constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        //Verificar si el usuario ya está conectado
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLogginFail = false;
            this.roles = this.tokenService.getAuthorities();
        }
    }

    onLogin(): void {
        //Agregar validación para campos vacíos
        if (!this.nombreUsuario || !this.password) {
            this.isLogginFail = true;
            this.errorMessage = 'Los campos están vacíos.';
            return;
        }

        //Crear el modelo de usuario para el inicio de sesión
        this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
        this.authService.login(this.loginUsuario).subscribe ({
            next: (data) => {
                this.isLogged = true;
                this.isLogginFail = false;
                // Guardar el token, nombre de usuario y roles en el servicio Token
                this.tokenService.setToken(data.token);
                this.tokenService.setUserName(data.nombreUsuario);
                this.tokenService.setAuthorities(data.authorities);
                this.roles = data.authorities;
                //Redirigir a la página principal
                this.router.navigate(['']).then(() => { window.location.reload(); });
            },

            //Función que se ejecuta si falla el inicio de sesión
            error: (err) => {
                this.isLogged = false;
                this.isLogginFail = true;
                this.errorMessage = err.error.mensaje;
            }
        });
    }

    //Elimina el error al borrar en el input
    clearErrorMessage() {
        this.isLogginFail = false;
        this.errorMessage = '';
    }
}