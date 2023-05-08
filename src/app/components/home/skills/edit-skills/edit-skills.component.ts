import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/s.skills.service';

@Component({
    selector: 'app-edit-skills',
    templateUrl: './edit-skills.component.html',
    styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent {
    skill: Skills = null;

    constructor(private skills: SkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

    //Trae los datos de la base de datos
    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.skills.detail(id).subscribe({
            next: data => {
                this.skill = data;
            },
            error: err => {
                alert(err.mensaje);
            }
        });
    }

    //Maneja la actualización
    onUpdate(): void {
        if (this.validation()) {
            const id = this.activatedRouter.snapshot.params['id'];
            this.skills.update(id, this.skill).subscribe({
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
        if (!this.skill.name || !this.skill.percent) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.skill.name.length < 5) {
            alert("El nombre debe tener al menos 5 caracteres.");
            return false;
        }
        return true;
    }
}
