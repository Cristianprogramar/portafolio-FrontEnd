import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { saveAs } from 'file-saver'

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
    persona: persona = new persona("", "", "");

    constructor(public personaService: PersonaService) { }

    //Traigo el nombre de la base de datos
    ngOnInit(): void {
        this.personaService.getPersona().subscribe(data => {this.persona = data})
    }

    //Descarga el CV desde assets
    downloadCv() {
        const url = '../../../../assets/img/general/cv.png';

        //Obtener el año actual
        const date = new Date();
        const year = date.getFullYear();

        //Crear el nombre del archivo con el año actual
        const nombreArchivo = `cv_${year}.jpg`;

        //Descarga el archivo
        fetch(url)
        .then(res => res.blob())
        .then(blob => {
            saveAs(blob, nombreArchivo);
        });
    }
}
