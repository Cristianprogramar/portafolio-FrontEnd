import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '../model/education';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SEducationService {
    eduURL = 'http://localhost:8080/education/';

    constructor(private httpClient: HttpClient) { }

    //Obtener la lista de la educaciones
    public list(): Observable<Education[]> {
        return this.httpClient.get<Education[]>(this.eduURL + 'list');
    }

    //Obtener los detalles de la educación
    public detail(id: number): Observable<Education> {
        return this.httpClient.get<Education>(this.eduURL + `detail/${id}`);
    }

    //Guardar una nueva educación
    public save(education: Education): Observable<any> {
        return this.httpClient.post<any>(this.eduURL + 'create', education);
    }

    //Actualizar una educación existente
    public update(id: number, education: Education): Observable<any> {
        return this.httpClient.put<any>(this.eduURL + `update/${id}`, education);
    }

    //Eliminar una educación existente
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
    }
}
