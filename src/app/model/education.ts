export class Education {
    //Define el modelo de las educaciones con su respectiva información
    id?: number;
    nameEdu: string;
    descriptionEdu: string;

    constructor(nameEdu: string, descriptionEdu: string) {
        this.nameEdu = nameEdu;
        this.descriptionEdu = descriptionEdu;
    }
}