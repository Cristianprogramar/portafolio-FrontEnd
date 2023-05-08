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
    nameE: string;
    descriptionE: string;

    constructor(private sExperience: SExperienceService, private router: Router) { }

    //Lógica del formulario
    onCreate(): void {
        if (this.validation()) {
            const expe = new Experience(this.nameE, this.descriptionE);
            this.sExperience.save(expe).subscribe({
                next: data => {
                    alert(data.mensaje);
                    this.router.navigate(['']).then(() => {window.location.reload()});
                },
                error: err => {
                    alert(err.mensaje);
                }
            });
        }
    }

    //Valida los campos
    validation(): boolean {
        if (!this.nameE || !this.descriptionE) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.nameE.length < 10) {
            alert("El nombre debe tener al menos 10 caracteres.");
            return false;
        } else if (this.descriptionE.length < 50) {
            alert("La descripción debe tener al menos 50 caracteres.");
            return false;
        }
        return true;
    }
}