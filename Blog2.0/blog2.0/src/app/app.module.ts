import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { AppRoutingModule } from './modules/app-routing.module';
import { PostsComponent } from './components/posts/posts.component'
import { PostSingleComponent } from './components/post-single/post-single.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    PostSingleComponent,
    SidebarComponent,
    NavigationComponent,
    AboutPageComponent,
    ContactPageComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    PostService,
  ],

})
export class AppModule { }