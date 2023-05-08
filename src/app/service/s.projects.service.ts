import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projects } from '../model/projects';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SProjectsService {
    proURL = 'https://proyectofinal-58q0.onrender.com/projects/';

    constructor(private httpClient: HttpClient) { }

    //Obtener la lista de los proyectos
    public list(): Observable<Projects[]> {
        return this.httpClient.get<Projects[]>(this.proURL + 'list');
    }

    //Obtener los detalles de los proyectos
    public detail(id: number): Observable<Projects> {
        return this.httpClient.get<Projects>(this.proURL + `detail/${id}`);
    }

    //Guardar un nuevo proyecto
    public save(projects: Projects): Observable<any> {
        return this.httpClient.post<any>(this.proURL + 'create', projects);
    }

    //Actualizar un proyecto existente
    public update(id: number, projects: Projects): Observable<any> {
        return this.httpClient.put<any>(this.proURL + `update/${id}`, projects);
    }

    //Eliminar un proyecto existente
    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.proURL + `delete/${id}`);
    }
}