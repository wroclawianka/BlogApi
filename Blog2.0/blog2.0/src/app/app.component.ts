import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { PlaygroundService } from './services/playground/playground.service';

@Component({
    selector: 'app-root',
    providers: [PlaygroundService],
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css', '../styles/buttons.css', '../styles/switch.css']
})
export class AppComponent {
    title = 'Prague';
    titleSecond = 'and Czech Republic';
    subtitle = 'with my eyes';
    footer = 'All Rights Reserved, Design and code by Dorota Zelga';
    playgroundMode: boolean;
    message : string;

    constructor(private playground : PlaygroundService){ }

    scrollTop() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    }
    
    toggleMode() {
        (this.playgroundMode) ? this.playground.playgroundOff() : this.playground.playgroundOn();
    }

    ngOnInit(){
        this.playground._playgroundMode.subscribe(playgroundMode => this.playgroundMode = playgroundMode);
    }
}