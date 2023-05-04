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
        NewExperienceComponent
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
            innerStrokeColor: '#fff',
            outerStrokeWidth: 12,
            innerStrokeWidth: 2
        })
    ],
    providers: [
        interceptorProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
