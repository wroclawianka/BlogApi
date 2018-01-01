import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css', '../app.component.css', '../buttons.css']
})
export class ContactPageComponent implements OnInit {
  header = "Contact";
  content = "Page under construction"

  constructor() { }

  ngOnInit() {
  }

}
