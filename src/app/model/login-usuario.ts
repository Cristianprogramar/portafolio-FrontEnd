export class LoginUsuario {
    //Almaceno el nombre de usuario y la contraseña
    nombreUsuario: string;
    password: string;

    constructor(nombreUsuario: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}