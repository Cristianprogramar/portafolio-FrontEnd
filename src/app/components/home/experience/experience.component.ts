import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s.experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {
    expe: Experience[] = [];
    isLogged = false;

    constructor(private sExperience: SExperienceService, private tokenService: TokenService) { }

    //Verifica si el usuario está autenticado
    ngOnInit(): void {
        this.loadExperience();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    //Carga la lista de experiencias
    loadExperience(): void {
        this.sExperience.list().subscribe(data => {this.expe = data});
    }

    //Eliminar la experiencia
    delete(id?: number) {
        if(id != undefined) {
            if (confirm('¿Estás seguro de que deseas eliminar esta experiencia?')) {
                this.sExperience.delete(id).subscribe({
                    next: data => {
                        alert(data.mensaje);
                        this.loadExperience();
                    },
                    error: err => {
                        alert(err.mensaje);
                    }
                })
            }
        }
    }
}