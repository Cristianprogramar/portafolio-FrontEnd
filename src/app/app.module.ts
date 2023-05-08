import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
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
import { SkillsComponent } from './components/home/skills/skills.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { EducationComponent } from './components/home/education/education.component';
import { PreloadComponent } from './components/preload/preload.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { LoginContentComponent } from './components/login/login-content/login-content.component';
import { interceptorProvider } from './service/interceptor-service.service';
import { NewExperienceComponent } from './components/home/experience/new-experience/new-experience.component';
import { EditExperienceComponent } from './components/home/experience/edit-experience/edit-experience.component';
import { NewEducationComponent } from './components/home/education/new-education/new-education.component';
import { EditEducationComponent } from './components/home/education/edit-education/edit-education.component';
import { NewProjectsComponent } from './components/home/projects/new-projects/new-projects.component';
import { EditProjectsComponent } from './components/home/projects/edit-projects/edit-projects.component';
import { EditSkillsComponent } from './components/home/skills/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './components/home/skills/new-skills/new-skills.component';
import { EditAboutComponent } from './components/home/about/edit-about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
        SkillsComponent,
        ExperienceComponent,
        MessengerComponent,
        EducationComponent,
        PreloadComponent,
        ProjectsComponent,
        LoginContentComponent,
        NewExperienceComponent,
        EditExperienceComponent,
        NewEducationComponent,
        EditEducationComponent,
        NewProjectsComponent,
        EditProjectsComponent,
        EditSkillsComponent,
        NewSkillsComponent,
        EditAboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgCircleProgressModule.forRoot({
            radius: 90,
            showUnits: false,
            showSubtitle: false,
            animation: true,
            animationDuration: 600,
            titleFontSize: '18',
            titleColor: '#ededed',
            outerStrokeColor: '#28b2b6',
            innerStrokeColor: '#ededed',
            outerStrokeWidth: 12,
            innerStrokeWidth: 2
        }),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideStorage(() => getStorage())
    ],
    providers: [
        interceptorProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
