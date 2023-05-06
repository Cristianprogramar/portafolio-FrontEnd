import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { SEducationService } from 'src/app/service/s.education.service';

@Component({
    selector: 'app-new-education',
    templateUrl: './new-education.component.html',
    styleUrls: ['./new-education.component.scss']
})
export class NewEducationComponent {
    nameEdu: string = '';
    descriptionEdu: string = '';
    errBase = false;
    errMsj!: string;

    constructor(private sEducation: SEducationService, private router: Router) { }

    //Lógica del formulario
    onCreate(): void {
        const expe = new Education(this.nameEdu, this.descriptionEdu);
        this.sEducation.save(expe).subscribe({
            next: data => {
                alert(data.mensaje);
                this.router.navigate(['']).then(() => {window.location.reload()});
            },
            error: err => {
                this.errBase = true;
                this.errMsj = err.error.mensaje;
            }
        });
    }

    //Elimina el error al borrar en el input
    clearErrorMessage() {
        this.errBase = false;
    }
}
