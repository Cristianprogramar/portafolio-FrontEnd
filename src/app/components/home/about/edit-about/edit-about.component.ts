import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
    selector: 'app-edit-about',
    templateUrl: './edit-about.component.html',
    styleUrls: ['./edit-about.component.scss']
})

export class EditAboutComponent implements OnInit {
    persona: persona = null;

    constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService) { }

    //Trae los datos de la base de datos
    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.personaService.detail(id).subscribe({
            next: data => {
                this.persona = data;
            }
        })
    }

    //Maneja la actualización
    onUpdate() {
        if (this.validation()) {
            const id = this.activatedRouter.snapshot.params['id'];
            this.persona.img = this.imageService.imgURL ? this.imageService.imgURL : this.persona.img;
            this.personaService.update(id, this.persona).subscribe({
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
    
    //Cargar la URL de la imagen
    uploadImage($event: any) {
        const id = this.activatedRouter.snapshot.params['id'];
        const name = "profile_" + id;
        this.imageService.uploadImage($event, name);
    }

    //Valida los campos
    validation(): boolean {
        if (!this.persona.nombre || !this.persona.apellido || !this.persona.description) {
            alert("Todos los campos son obligatorios.");
            return false;
        } else if (this.persona.nombre.length < 5) {
            alert("El nombre debe tener al menos 5 caracteres.");
            return false;
        } else if (this.persona.description.length < 20) {
            alert("La descripción debe tener al menos 20 caracteres.");
            return false;
        } else if (this.imageService.isLoading) {
            alert("La imagen se está subiendo, aguarde un momento antes de enviar.");
            return false;
        }
        return true;
    }
}