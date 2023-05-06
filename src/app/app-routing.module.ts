import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceComponent } from './components/home/experience/new-experience/new-experience.component';
import { AuthGuard } from './service/auth.guard.service';
import { EditExperienceComponent } from './components/home/experience/edit-experience/edit-experience.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'newexp', component: NewExperienceComponent, canActivate: [AuthGuard] },
    { path: 'editexp/:id', component: EditExperienceComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }