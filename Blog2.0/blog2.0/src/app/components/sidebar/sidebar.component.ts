import { Component, OnInit } from '@angular/core';
import { Reference } from './reference';
import { Picture } from './picture';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
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

}
