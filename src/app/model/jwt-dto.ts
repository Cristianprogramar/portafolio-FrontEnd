export class JwtDto {
    //Definimos los datos del JSON
    token!: string;
    type!: string;
    nombreUsuario!: string;
    authorities!: string[];
}