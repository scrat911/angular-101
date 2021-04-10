import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Blog';
  constructor(public auth: AngularFireAuth, public router: AppRoutingModule) {}

  logout() {
    this.auth.signOut();
    this.router;
  }
}
