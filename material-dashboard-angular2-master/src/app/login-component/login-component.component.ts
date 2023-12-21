// login-component.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  isAdmin: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) { }

  ngOnInit(): void {}

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() { return this.loginForm.controls['password']; }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        if (response.length > 0 && response[0].password === password) {
          if (email === 'Admin@gmail.com') {
            this.isAdmin = true; // Set isAdmin to true if the user is an admin
            this.router.navigate(['/features']);
          } else {
            this.router.navigate(['/icons']);
          }
          sessionStorage.setItem('email', email as string);
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is wrong' });
        }
      },
      error => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  }
}