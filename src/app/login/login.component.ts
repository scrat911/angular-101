import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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

  errors = "";

  constructor(
    public auth: AngularFireAuth,
    private fb: FormBuilder
  ) {}

  get showErrors() {
    return this.errors != "";
  }

  googleLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  login(value: any):void{
      this.auth.signInWithEmailAndPassword(value['email'], value['password']).catch((error: firebase.FirebaseError) => {this.errors = error.message});
  }
  logout() {
    this.auth.signOut();
  }

  ngOnInit(): void {}
}
