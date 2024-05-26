import { Component, HostBinding, OnInit } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SignInService } from '../../service/sign-in.service';
import { jwtDecode } from 'jwt-decode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  failedLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private signInService: SignInService) { }

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
        const token = localStorage.getItem('jwtToken');
        if (token) {
          const decoded = jwtDecode(token) as any;
          const roles = decoded.roles;
          this.router.navigate(['/dashboard']);

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