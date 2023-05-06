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
    errBase = false;
    errMsj!: string;

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
        const id = this.activatedRouter.snapshot.params['id'];
        this.sProjects.update(id, this.pro).subscribe({
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
