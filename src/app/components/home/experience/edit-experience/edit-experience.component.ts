import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s.experience.service';

@Component({
    selector: 'app-edit-experience',
    templateUrl: './edit-experience.component.html',
    styleUrls: ['./edit-experience.component.scss']
})
export class EditExperienceComponent implements OnInit {
    workExp: Experience = null;
    errBase = false;
    errMsj!: string;

    constructor(private sExperience: SExperienceService, private activatedRouter: ActivatedRoute, private router: Router) { }

    //Trae los datos de la base de datos
    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.sExperience.detail(id).subscribe({
            next: data => {
                this.workExp = data;
            }
        })
    }

    //Maneja la actualización
    onUpdate() {
        const id = this.activatedRouter.snapshot.params['id'];
        this.sExperience.update(id, this.workExp).subscribe({
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