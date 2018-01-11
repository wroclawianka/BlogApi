import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css', 'buttons.css']
})
export class AppComponent {
    title = 'Prague';
    subtitle = 'with my eyes';
    footer = 'All Rights Reserved, Design and code by Dorota Zelga';

    scrollTop() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    }
}