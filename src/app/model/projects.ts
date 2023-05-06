export class Projects {
    //Define el modelo de los proyectos con su respectiva información
    id?: number;
    nameP: string;
    descriptionP: string;

    constructor(nameP: string, descriptionP: string) {
        this.nameP = nameP;
        this.descriptionP = descriptionP;
    }
}
