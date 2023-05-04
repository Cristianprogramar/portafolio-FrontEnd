import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    //Obtengo la fecha actual y la importo al footer
    getDate() {
        const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        const date = new Date();
        const day = date.getDate();
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} de ${monthName} de ${year}`;
    }
}
