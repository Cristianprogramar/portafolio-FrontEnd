import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    isLogged = false;

    constructor(private renderer: Renderer2, private el: ElementRef, private tokenService: TokenService) { }

    //Header sticky
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: {target: {documentElement: {scrollTop: number}}}) {
        const header = this.el.nativeElement.querySelector('header');
        this.renderer.addClass(header, '--sticky');
        if (event.target.documentElement.scrollTop < 800) {
            this.renderer.removeClass(header, '--sticky');
        }
    }

    //Detecta el TOKEN
    ngOnInit(): void {
        if (this.tokenService.getToken()) {
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }
    }

    //Cierre de sesión
    onLogOut(): void {
        this.tokenService.logOut();
        window.location.reload();
    }
}