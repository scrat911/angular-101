import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    private fb: FormBuilder
  ) {}

  googleLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['wall']);
  }
  logout() {
    this.auth.signOut();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {}
}
