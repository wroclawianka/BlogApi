import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css', '../styles/buttons.css', '../styles/switch.css']
})
export class AppComponent {
    title = 'Prague';
    titleSecond = 'and Czech Republic';
    subtitle = 'with my eyes';
    footer = 'All Rights Reserved, Design and code by Dorota Zelga';

    scrollTop() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    }
}