import { Component } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { SProjectsService } from 'src/app/service/s.projects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    pro: Projects[] = [];
    isLogged = false;
    errBase = false;
    errMsj!: string;

    constructor(private sProjects: SProjectsService, private tokenService: TokenService) { }

    //Verifica si el usuario está autenticado
    ngOnInit(): void {
        this.cargarProyectos();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    //Carga la lista de proyectos
    cargarProyectos(): void {
        this.sProjects.lista().subscribe(data => {this.pro = data});
    }

    //Eliminar los proyectos
    delete(id?: number) {
        if (id != undefined) {
            if (confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
                this.sProjects.delete(id).subscribe({
                    next: data => {
                        alert(data.mensaje);
                        this.cargarProyectos();
                    },
                    error: err => {
                        this.errBase = true;
                        alert(err.mensaje);
                    }
                })
            }
        }
    }
}
