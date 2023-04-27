import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {

    //Mediante este servicio traigo de la base de datos al usuario
    URL = 'http://localhost:8080/personas/';

    constructor(private http: HttpClient) { }

    public getPersona(): Observable<persona> {
        return this.http.get<persona>(this.URL+ 'traer/perfil');
    }
}