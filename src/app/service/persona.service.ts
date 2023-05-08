import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
    providedIn: 'root'
})

export class PersonaService {
    userURL = 'http://localhost:8080/user/';

    constructor(private http: HttpClient) { }

    //Obtener la lista de los usuarios
    public list(): Observable<persona[]> {
        return this.http.get<persona[]>(this.userURL + 'list');
    }

    //Obtener los detalles de los usuarios
    public detail(id: number): Observable<persona> {
        return this.http.get<persona>(this.userURL + `detail/${id}`);
    }

    //Guardar un nuevo usuario
    public save(persona: persona): Observable<any> {
        return this.http.post<any>(this.userURL + 'create', persona);
    }

    //Actualizar un usuario existente
    public update(id: number, persona: persona): Observable<any> {
        return this.http.put<any>(this.userURL + `update/${id}`, persona);
    }

    //Eliminar un usuario existente
    public delete(id: number): Observable<any> {
        return this.http.delete<any>(this.userURL + `delete/${id}`);
    }
}