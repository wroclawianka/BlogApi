import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; //mock
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component'
import { PostSingleComponent } from './post-single/post-single.component';
import { PostService } from './post.service';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // mock
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
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