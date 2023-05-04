import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
    providedIn: 'root'
})

export class SExperienceService {
    expURL = 'http://localhost:8080/workexp/';

    constructor(private httpClient: HttpClient) { }

    //Obtener la lista de experiencias laborales
    public lista(): Observable<Experience[]> {
        return this.httpClient.get<Experience[]>(this.expURL + 'list');
    }

    //Obtener los detalles de una experiencia laboral
    public detail(id: number): Observable<Experience> {
        return this.httpClient.get<Experience>(this.expURL + `detail/${id}`);
    }

    //Guardar una nueva experiencia laboral
    public save(experience: Experience): Observable<any> {
        return this.httpClient.post<any>(this.expURL + 'create', experience);
    }

    //Actualizar una experiencia laboral existente
    public update(id: number, experience: Experience): Observable<any> {
        return this.httpClient.put<any>(this.expURL + `update/${id}`, experience);
    }

    //Eliminar una experiencia laboral existente
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
    }
}
