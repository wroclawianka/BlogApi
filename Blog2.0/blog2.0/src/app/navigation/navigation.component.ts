import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  links = [
    {
      title: "Main Page",
      path: "/"
    },
    {
      title: "About Blog",
      path: "/" //TODO: About Blog - the page doesn't created yet
    },
    {
      title: "Contact",
      path: "/" //TODO: Contact - the page doesn't created yet
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
