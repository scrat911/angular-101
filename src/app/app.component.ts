import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Blog';
  constructor(public auth: AngularFireAuth, public router: Router) {}

  logout() {
    this.auth.signOut();
  }

  ngOnInit() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.router.navigate(['wall']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
