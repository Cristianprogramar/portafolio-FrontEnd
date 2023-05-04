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
        this.cargarExperiencia();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    //Carga la lista de experiencias
    cargarExperiencia(): void {
        this.sExperience.lista().subscribe(data => {this.expe = data;})
    }
}
