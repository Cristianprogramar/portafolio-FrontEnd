import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
    providedIn: 'root'
})

export class PersonaService {

    //Mediante este servicio traigo del back mi usuario
    URL = 'http://localhost:8080/user/';

    constructor(private http: HttpClient) { }

    public getPersona(): Observable<persona> {
        return this.http.get<persona>(this.URL+ 'get/profile');
    }
}