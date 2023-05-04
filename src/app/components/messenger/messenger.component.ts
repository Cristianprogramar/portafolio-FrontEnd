import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.scss']
})

export class MessengerComponent implements AfterViewInit {
    constructor(private http: HttpClient) { }

    //Hago una petición HTTP y obtengo el SDK de Facebook
    ngAfterViewInit() {
        this.http.get('../../../assets/js/messenger.js', {responseType: 'text'})
        .subscribe((scriptContent: string) => {
            const scriptMessenger = document.createElement('scriptMessenger');
            scriptMessenger.innerHTML = scriptContent;
            document.body.appendChild(scriptMessenger);
        });
    }
}