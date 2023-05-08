import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
    providedIn: 'root'
})

export class SExperienceService {
    expURL = 'https://proyectofinal-58q0.onrender.com/experience/';

    constructor(private httpClient: HttpClient) { }

    //Obtener la lista de las experiencias
    public list(): Observable<Experience[]> {
        return this.httpClient.get<Experience[]>(this.expURL + 'list');
    }

    //Obtener los detalles de las experiencias
    public detail(id: number): Observable<Experience> {
        return this.httpClient.get<Experience>(this.expURL + `detail/${id}`);
    }

    //Guardar una nueva experiencia
    public save(experience: Experience): Observable<any> {
        return this.httpClient.post<any>(this.expURL + 'create', experience);
    }

    //Actualizar una experiencia existente
    public update(id: number, experience: Experience): Observable<any> {
        return this.httpClient.put<any>(this.expURL + `update/${id}`, experience);
    }

    //Eliminar una experiencia existente
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
    }
}
