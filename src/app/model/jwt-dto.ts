export class JwtDto {

    //Definimos los datos del JSON Web Token
    token!: string;
    type!: string;
    nombreUsuario!: string;
    authorities!: string[];
}