import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { SProjectsService } from 'src/app/service/s.projects.service';

@Component({
    selector: 'app-edit-projects',
    templateUrl: './edit-projects.component.html',
    styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent {
    pro: Projects = null;

    constructor(private sProjects: SProjectsService, private activatedRouter: ActivatedRoute, private router: Router) { }

    //Trae los datos de la base de datos
    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.sProjects.detail(id).subscribe({
            next: data => {
                this.pro = data;
            }
        })
    }

    //Maneja la actualización
    onUpdate() {
        if (this.validation()) {
            const id = this.activatedRouter.snapshot.params['id'];
            this.sProjects.update(id, this.pro).subscribe({
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
        if (!this.pro.nameP || !this.pro.descriptionP) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.pro.nameP.length < 10) {
            alert("El nombre debe tener al menos 10 caracteres.");
            return false;
        } else if (this.pro.descriptionP.length < 50) {
            alert("La descripción debe tener al menos 50 caracteres.");
            return false;
        }
        return true;
    }
}
