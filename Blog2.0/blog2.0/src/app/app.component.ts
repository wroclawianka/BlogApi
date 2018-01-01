import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Prague';
    subtitle = 'with my eyes';
    footer = 'All Rights Reserved, Design and code by Dorota Zelga';

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.getGridTemplate();
    }

    getGridTemplate() {
        const widthOfChange = 800;
        return window.innerWidth <= widthOfChange ? this.setSideBarBelow() : this.setSideBarAbove();
    }

    setSideBarBelow() {
        return `"header header" "nav nav" "content content" "sidebar sidebar" "footer footer"`;
    }

    setSideBarAbove() {
        return `"header header" "nav nav" "content sidebar" "footer footer"`;
    }
}