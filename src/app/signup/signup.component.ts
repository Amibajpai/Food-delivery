import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  Signupobj: any = {
    "username": "",
    "address": "",
    "phoneNo": ""
  }

  constructor(private http: HttpClient){}

  onSignup(){
    this.http.post("https://localhost:7230/api/RegisterUserAPI", this.Signupobj).subscribe((res:any)=>{
           
    })
  }

} 
