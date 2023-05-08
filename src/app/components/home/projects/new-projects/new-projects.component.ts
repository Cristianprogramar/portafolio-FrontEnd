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
    nameP: string;
    descriptionP: string;

    constructor(private sProjects: SProjectsService, private router: Router) { }

    //Lógica del formulario
    onCreate(): void {
        if (this.validation()) {
            const pro = new Projects(this.nameP, this.descriptionP);
            this.sProjects.save(pro).subscribe({
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
        if (!this.nameP || !this.descriptionP) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.nameP.length < 10) {
            alert("El nombre debe tener al menos 10 caracteres.");
            return false;
        } else if (this.descriptionP.length < 50) {
            alert("La descripción debe tener al menos 50 caracteres.");
            return false;
        }
        return true;
    }
}
