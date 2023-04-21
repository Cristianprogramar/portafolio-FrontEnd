import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MobileBarComponent } from './components/mobile-bar/mobile-bar.component';
import { AboutComponent } from './components/home/about/about.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { EducationComponent } from './components/home/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    MobileBarComponent,
    AboutComponent,
    BannerComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    MessengerComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
