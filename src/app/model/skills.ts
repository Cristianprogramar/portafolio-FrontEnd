export class Skills {
    //Define el modelo de los skills con su respectiva información
    id: number;
    name: string;
    percent: number;

    constructor(name: string, percent: number) {
        this.name = name;
        this.percent = percent;
    }
}
