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
    nameEdu: string;
    descriptionEdu: string;

    constructor(private sEducation: SEducationService, private router: Router) { }

    //Lógica del formulario
    onCreate(): void {
        if (this.validation()) {
            const expe = new Education(this.nameEdu, this.descriptionEdu);
            this.sEducation.save(expe).subscribe({
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
        if (!this.nameEdu || !this.descriptionEdu) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.nameEdu.length < 10) {
            alert("El nombre debe tener al menos 10 caracteres.");
            return false;
        } else if (this.descriptionEdu.length < 50) {
            alert("La descripción debe tener al menos 50 caracteres.");
            return false;
        }
        return true;
    }
}
