import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/s.skills.service';

@Component({
    selector: 'app-new-skills',
    templateUrl: './new-skills.component.html',
    styleUrls: ['./new-skills.component.scss']
})

export class NewSkillsComponent {
    name: string;
    percent: number;

    constructor(private skills: SkillsService, private router: Router) { }

    //Lógica del formulario
    onCreate(): void {
        if (this.validation()) {
            const skill = new Skills(this.name, this.percent);
            this.skills.save(skill).subscribe({
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
        if (!this.name || !this.percent) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.name.length < 5) {
            alert("El nombre debe tener al menos 5 caracteres.");
            return false;
        }
        return true;
    }
}
