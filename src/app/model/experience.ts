export class Experience {
    //Define el modelo de la experiencia con su respectiva información
    id?: number;
    nameE: string;
    descriptionE: string;

    constructor(nameE: string, descriptionE: string) {
        this.nameE = nameE;
        this.descriptionE = descriptionE;
    }
}