import { Component } from '@angular/core';
import { Education } from 'src/app/model/education';
import { SEducationService } from 'src/app/service/s.education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})

export class EducationComponent {
    edu: Education[] = [];
    isLogged = false;
    errBase = false;
    errMsj!: string;

    constructor(private sEducation: SEducationService, private tokenService: TokenService) { }

    //Verifica si el usuario está autenticado
    ngOnInit(): void {
        this.cargarEducacion();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    //Carga la lista de educaciones
    cargarEducacion(): void {
        this.sEducation.lista().subscribe(data => {this.edu = data});
    }

    //Eliminar la educación
    delete(id?: number) {
        if(id != undefined) {
            if (confirm('¿Estás seguro de que deseas eliminar esta educación?')) {
                this.sEducation.delete(id).subscribe({
                    next: data => {
                        alert(data.mensaje);
                        this.cargarEducacion();
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