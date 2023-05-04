import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s.experience.service';

@Component({
    selector: 'app-new-experience',
    templateUrl: './new-experience.component.html',
    styleUrls: ['./new-experience.component.scss']
})

export class NewExperienceComponent {

    nameE: string = '';
    descriptionE: string = '';

    constructor(private sExperience: SExperienceService, private router: Router) { }

    onCreate(): void {
        const expe = new Experience(this.nameE, this.descriptionE);
        this.sExperience.save(expe).subscribe(data => {
            alert('Se creo correctamente.');
            this.router.navigate(['']).then(() => {window.location.reload()});
        }, err => {
            alert('Ocurrio un error.');
        })
    }
}
