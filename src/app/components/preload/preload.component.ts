import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-preload',
    templateUrl: './preload.component.html',
    styleUrls: ['./preload.component.scss']
})

export class PreloadComponent implements OnInit {
    loading = true;

    //Se quita el preload
    ngOnInit(): void {
        window.onload = () => this.loading = false;
        window.addEventListener('popstate', () => {
            if (document.readyState === 'complete') {
                this.loading = false;
            }
        });
    }
}