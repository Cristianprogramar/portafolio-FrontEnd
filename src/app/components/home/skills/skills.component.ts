import { Component } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/s.skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {
    skill: Skills[] = [];
    isLogged = false;

    constructor(private skills: SkillsService, private tokenService: TokenService) { }

    //Verifica si el usuario está autenticado
    ngOnInit(): void {
        this.loadSkills();
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    //Carga la lista de skills
    loadSkills(): void {
        this.skills.lista().subscribe(data => {this.skill = data});
    }

    //Eliminar las skills
    delete(id?: number) {
        if (id != undefined) {
            if (confirm('¿Estás seguro de que deseas eliminar esta skill?')) {
                this.skills.delete(id).subscribe({
                    next: data => {
                        alert(data.mensaje);
                        this.loadSkills();
                    },
                    error: err => {
                        alert(err.mensaje);
                    }
                })
            }
        }
    }
}