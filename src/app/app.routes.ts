import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'loginpage',
        pathMatch: 'full'
    },
    {
        path: 'loginpage',
        component: LoginpageComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },

];
