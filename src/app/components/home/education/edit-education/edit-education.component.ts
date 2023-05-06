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

    //Elimina el error al borrar en el input
    clearErrorMessage() {
        this.errBase = false;
    }
}
