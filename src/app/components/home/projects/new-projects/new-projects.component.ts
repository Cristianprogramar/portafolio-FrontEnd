import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { SProjectsService } from 'src/app/service/s.projects.service';

@Component({
    selector: 'app-new-projects',
    templateUrl: './new-projects.component.html',
    styleUrls: ['./new-projects.component.scss']
})
export class NewProjectsComponent {
    nameP: string = '';
    descriptionP: string = '';
    errBase = false;
    errMsj!: string;

    constructor(private sProjects: SProjectsService, private router: Router) { }

    //Lógica del formulario
    onCreate(): void {
        const pro = new Projects(this.nameP, this.descriptionP);
        this.sProjects.save(pro).subscribe({
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
