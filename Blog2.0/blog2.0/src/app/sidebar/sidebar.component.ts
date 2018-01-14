import { Component, OnInit } from '@angular/core';
import { Reference } from '../reference';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  aboutMeHeader = "About me";
  aboutMeContent = `Welcome to my blog template project. 
  This page is created for my self-learning purposes. 
  <br> I am training frontend skills, so I will practice here 
  Angular & TypeScript with other tools and frameworks.`;

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
