import { NgModule } from '@angular/core';

@NgModule({

})
export class ContentLayout {
    widthOfChange : number;
    components : string[];

    constructor(widthOfChange, components){
        this.widthOfChange = widthOfChange;
        this.components = components;
    }

    getGridTemplate() {
        return window.innerWidth <= this.widthOfChange ? this.setSideBarBelow() : this.setSideBarAbove();
    }

    setSideBarBelow() {
        let areas : string[] = [];
        for(let component of this.components){
            areas.push(`"${component} ${component}"`)
        }
        return areas.join(" ");
    }

    setSideBarAbove() {
        let areas : string[] = [`"`, `"`];
        for(let component of this.components){
            areas.splice(areas.length - 1, 0, component);
        }
        return areas.join(" ");
    }
}