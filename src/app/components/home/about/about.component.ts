import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
    persona: persona = null;
    isLogged = false;

    constructor(public personaService: PersonaService, private tokenService: TokenService) { }

    //Verifica si el usuario está autenticado
    ngOnInit(): void {
        this.loadUser();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    //Carga el usuario con el ID 1
    loadUser() {
        this.personaService.detail(1).subscribe(data => {
            this.persona = data;
        })
    }
}