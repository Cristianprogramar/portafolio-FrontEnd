import { Component } from '@angular/core';

@Component({
    selector: 'app-preload',
    templateUrl: './preload.component.html',
    styleUrls: ['./preload.component.scss']
})
export class PreloadComponent {

    loading = true;

    //Una vez que carga el sitio quita el preload
    ngOnInit(): void {
        window.onload = () => {
            this.loading = false;
        };
    }
}