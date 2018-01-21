import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css', '../app.component.css', '../buttons.css']
})
export class AboutPageComponent implements OnInit {
  header = "About Prague with my eyes blog";
  content = `Welcome to my page! This is blog template for my learning purposes.
    Here is a placeholder for a long text describing why this blog is awesome.
    Right now I am focused on Angular with TypeScript, so this is the main 
    technologies used by me. In the days when I am creating this template, 
    I am at the very beginning of my adventure with front-end. Enjoy!`;
  author = "- Dorota";
  picture : Picture = new Picture(".\\assets\\imgs\\about_blog.jpg", "view of Prague", false);

  constructor() { }

  ngOnInit() {
  }

}
