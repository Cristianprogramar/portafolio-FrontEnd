import { Component } from '@angular/core';
import { saveAs } from 'file-saver'

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

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
};
