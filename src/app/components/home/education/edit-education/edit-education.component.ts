import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { SEducationService } from 'src/app/service/s.education.service';

@Component({
    selector: 'app-edit-education',
    templateUrl: './edit-education.component.html',
    styleUrls: ['./edit-education.component.scss']
})
export class EditEducationComponent {
    edu: Education = null;
    errBase = false;
    errMsj!: string;

    constructor(private sEducation: SEducationService, private activatedRouter: ActivatedRoute, private router: Router) { }

    //Trae los datos de la base de datos
    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.sEducation.detail(id).subscribe({
            next: data => {
                this.edu = data;
            }
        })
    }

    //Maneja la actualización
    onUpdate() {
        if (this.validation()) {
            const id = this.activatedRouter.snapshot.params['id'];
            this.sEducation.update(id, this.edu).subscribe({
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
    }

    //Valida los campos
    validation(): boolean {
        if (!this.edu.nameEdu || !this.edu.descriptionEdu) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.edu.nameEdu.length < 10) {
            alert("El nombre debe tener al menos 10 caracteres.");
            return false;
        } else if (this.edu.descriptionEdu.length < 50) {
            alert("La descripción debe tener al menos 50 caracteres.");
            return false;
        }
        return true;
    }
}
