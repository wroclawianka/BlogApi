import { Component, HostListener } from '@angular/core';
// import { ContentLayout } from './contentLayout.module';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Prague';
    subtitle = 'with my eyes';
    footer = 'All Rights Reserved, Design and code by Dorota Zelga';
    // contentLayout : ContentLayout = new ContentLayout(); //!!!!

    // @HostListener('window:resize', ['$event'])
    // onResize(event) {
    // }

    // getGridTemplate() {
    //     const widthOfChange = 800;
    //     return window.innerWidth <= widthOfChange ? this.setSideBarBelow() : this.setSideBarAbove();
    // }

    // setSideBarBelow() {
    //     return `"posts-list" "sidebar"`;
    // }

    // setSideBarAbove() {
    //     return `"posts-list sidebar"`;
    // }

    // ngOnInit() {
    //     this.getGridTemplate();
    // }

// }
}