import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
    providedIn: 'root'
})

export class PersonaService {
    URL = 'http://localhost:8080/user/';

    constructor(private http: HttpClient) { }

    //Obtener la información del usuario
    public getPersona(): Observable<persona> {
        return this.http.get<persona>(this.URL+ 'get/profile');
    }
}