import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
    persona: persona = new persona("", "", "");

    constructor(public personaService: PersonaService) { }

    //Traigo el nombre de la base de datos
    ngOnInit(): void {
        this.personaService.getPersona().subscribe(data => {this.persona = data})
    }
}