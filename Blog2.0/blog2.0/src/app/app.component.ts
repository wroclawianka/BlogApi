import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { EditModeService } from './services/editmode/editmode.service';

@Component({
    selector: 'app-root',
    providers: [EditModeService],
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css', '../styles/buttons.css', '../styles/switch.css']
})
export class AppComponent {
    title = 'Prague';
    titleSecond = 'and Czech Republic';
    subtitle = 'with my eyes';
    footer = 'All Rights Reserved, Design and code by Dorota Zelga';
    editMode: boolean;
    message : string;

    constructor(private editmodeService : EditModeService){ }

    scrollTop() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    }
    
    toggleMode() {
        (this.editMode) ? this.editmodeService.editModeOff() : this.editmodeService.editModeOn();
    }

    ngOnInit(){
        this.editmodeService._editMode.subscribe((editMode : boolean) => this.editMode = editMode);
    }
}