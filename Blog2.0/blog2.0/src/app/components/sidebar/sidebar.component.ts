import { Component, OnInit, HostListener } from '@angular/core';
import { Reference } from './reference.model';
import { Picture } from './picture.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  widthOfChange: number = 1000;
  aboutMeHeader = "About me";
  aboutMeContent = `Welcome to my blog template project. 
  This page is created for my self-learning purposes. 
  <br> I am training frontend skills and I will practice here 
  Angular & TypeScript with other tools and frameworks.`;
   authorPicture: Picture = {
     url:".\\assets\\imgs\\author.jpg",
     title:"Author of ther blog"
   }
  references: Reference[] = [
    {
      url:"https://github.com/wroclawianka",
      icon:"fa fa-github", 
      text:" /wroclawianka"
    },
    {
      url:"https://www.linkedin.com/in/dorotazelga",
      icon:"fa fa-linkedin", 
      text:" /dorotazelga"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  isLowerSchema() {
    return window.innerWidth <= this.widthOfChange;
  }
}
