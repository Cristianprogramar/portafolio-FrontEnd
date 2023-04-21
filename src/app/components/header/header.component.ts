import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    //Header sticky
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: { target: { documentElement: { scrollTop: number; }; }; }) {
        const header = this.el.nativeElement.querySelector('header');
        this.renderer.addClass(header, '--sticky');
        if (event.target.documentElement.scrollTop < 100) {
            this.renderer.removeClass(header, '--sticky');
        }
    }
}