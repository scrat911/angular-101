import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import firebase from 'firebase/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    confirm: [null, Validators.required]
  });

  errors = "";

  constructor(
    public auth: AngularFireAuth,
    private fb: FormBuilder
  ) {}

  get showErrors() {
    return this.errors != "";
  }

  registerUser(value: any):void{
    this.auth.createUserWithEmailAndPassword(value['email'], value['password']);
  }

  ngOnInit(): void {
  }

}
