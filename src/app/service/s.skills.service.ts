import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
    providedIn: 'root'
})

export class SkillsService {
    skillsURL = 'https://proyectofinal-58q0.onrender.com/hys/';

    constructor(private httpClient: HttpClient) { }

    //Obtener la lista de las skills
    public list(): Observable<Skills[]> {
        return this.httpClient.get<Skills[]>(this.skillsURL + 'list');
    }

    //Obtener los detalles de las skills
    public detail(id: number): Observable<Skills> {
        return this.httpClient.get<Skills>(this.skillsURL + `detail/${id}`);
    }

    //Guardar una nueva skill
    public save(skill: Skills): Observable<any> {
        return this.httpClient.post<any>(this.skillsURL + 'create', skill);
    }

    //Actualizar una skill existente
    public update(id: number, skill: Skills): Observable<any> {
        return this.httpClient.put<any>(this.skillsURL + `update/${id}`, skill);
    }

    //Eliminar una skill existente
    public delete(id: number): Observable<any> {
        return this.httpClient.delete(this.skillsURL + `delete/${id}`);
    }
}
