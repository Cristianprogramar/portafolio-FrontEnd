import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/home/experience/new-experience/new-experience.component';
import { AuthGuard } from './service/auth.guard.service';
import { EditExperienceComponent } from './components/home/experience/edit-experience/edit-experience.component';
import { NewEducationComponent } from './components/home/education/new-education/new-education.component';
import { EditEducationComponent } from './components/home/education/edit-education/edit-education.component';
import { NewProjectsComponent } from './components/home/projects/new-projects/new-projects.component';
import { EditProjectsComponent } from './components/home/projects/edit-projects/edit-projects.component';
import { NewSkillsComponent } from './components/home/skills/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/home/skills/edit-skills/edit-skills.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'newexp', component: NewExperienceComponent, canActivate: [AuthGuard]},
    {path: 'editexp/:id', component: EditExperienceComponent, canActivate: [AuthGuard]},
    {path: 'newedu', component: NewEducationComponent, canActivate: [AuthGuard]},
    {path: 'editedu/:id', component: EditEducationComponent, canActivate: [AuthGuard]},
    {path: 'newpro', component: NewProjectsComponent, canActivate: [AuthGuard]},
    {path: 'editpro/:id', component: EditProjectsComponent, canActivate: [AuthGuard]},
    {path: 'newskill', component: NewSkillsComponent, canActivate: [AuthGuard]},
    {path: 'editskill/:id', component: EditSkillsComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }