import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth, public router: Router) { }
  googleLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['wall']);
  }
  logout() {
    this.auth.signOut();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
