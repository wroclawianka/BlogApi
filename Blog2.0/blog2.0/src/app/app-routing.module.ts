import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component'
import { PostSingleComponent } from './post-single/post-single.component'
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:Id', component: PostSingleComponent },
  { path: 'about-blog', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }