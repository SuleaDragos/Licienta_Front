import { Component, HostBinding, OnInit } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SignInService } from '../../service/sign-in.service';
import { jwtDecode } from 'jwt-decode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  failedLogin: boolean = false;
  role: string | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router, private signInService: SignInService, private userService: UserServiceService) { }

  ngOnInit(): void {
    localStorage.removeItem('jwtToken');
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toDashboard() {

    this.signInService.signIn(this.signInForm.value).subscribe({
      next: (response) => {
        const email = this.signInService.getCurrentUserEmail();
        if (email) {
          this.userService.getUserByEmail(email).subscribe({
            next: (user: User) =>{
              if(user.role == "USER")
                this.router.navigate(['/dashboard']);
              else if(user.role == "ADMIN")
                this.router.navigate(['/admin'])
          }
          });
        }
      },
      error:(error) => { 
        this.failedLogin = true;
       }
  });
  }
  toRegister() {
    this.router.navigate(['/register']);
  }
}