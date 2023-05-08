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
    expe: Experience = null;

    constructor(private sExperience: SExperienceService, private activatedRouter: ActivatedRoute, private router: Router) { }

    //Trae los datos de la base de datos
    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.sExperience.detail(id).subscribe({
            next: data => {
                this.expe = data;
            },
            error: err => {
                alert(err.mensaje);
            }
        });
    }

    //Maneja la actualización
    onUpdate(): void {
        if (this.validation()) {
            const id = this.activatedRouter.snapshot.params['id'];
            this.sExperience.update(id, this.expe).subscribe({
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
        if (!this.expe.nameE || !this.expe.descriptionE) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.expe.nameE.length < 10) {
            alert("El nombre debe tener al menos 10 caracteres.");
            return false;
        } else if (this.expe.descriptionE.length < 50) {
            alert("La descripción debe tener al menos 50 caracteres.");
            return false;
        }
        return true;
    }
}
