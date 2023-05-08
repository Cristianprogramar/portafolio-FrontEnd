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

    constructor(private sEducation: SEducationService, private tokenService: TokenService) { }

    //Verifica si el usuario está autenticado
    ngOnInit(): void {
        this.loadEducation();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    //Carga la lista de educaciones
    loadEducation(): void {
        this.sEducation.list().subscribe(data => {this.edu = data});
    }

    //Eliminar la educación
    delete(id?: number) {
        if(id != undefined) {
            if (confirm('¿Estás seguro de que deseas eliminar esta educación?')) {
                this.sEducation.delete(id).subscribe({
                    next: data => {
                        alert(data.mensaje);
                        this.loadEducation();
                    },
                    error: err => {
                        alert(err.mensaje);
                    }
                })
            }
        }
    }
}