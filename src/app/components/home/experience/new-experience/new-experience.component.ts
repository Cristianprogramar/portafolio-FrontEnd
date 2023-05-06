import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s.experience.service';

@Component({
    selector: 'app-new-experience',
    templateUrl: './new-experience.component.html',
    styleUrls: ['./new-experience.component.scss']
})

export class NewExperienceComponent {
    nameE: string = '';
    descriptionE: string = '';
    errBase = false;
    errMsj!: string;

    constructor(private sExperience: SExperienceService, private router: Router) { }

    //Lógica del formulario
    onCreate(): void {
        const expe = new Experience(this.nameE, this.descriptionE);
        this.sExperience.save(expe).subscribe({
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