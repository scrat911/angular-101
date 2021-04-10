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
    private fb: FormBuilder
  ) {}

  googleLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  login(){
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    console.log(this.auth.signInWithEmailAndPassword(email, password));
  }
  logout() {
    this.auth.signOut();
  }

  ngOnInit(): void {}
}
