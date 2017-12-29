import { Component, OnInit } from '@angular/core';

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
  Angular & TypeScript with other tools and frameworks. 
  <br>To see more of my project, please, visit my GitHub profile.`;

  constructor() { }

  ngOnInit() {
  }

}
