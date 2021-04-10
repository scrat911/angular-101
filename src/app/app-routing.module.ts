import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WallComponent } from './wall/wall.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectLoggedIn = () => redirectLoggedInTo(['wall']);
const redirectforbidden = () => redirectUnauthorizedTo(['login'])

const routes: Routes = [
  { path: '', redirectTo: '/wall', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,  ...canActivate(redirectLoggedIn) },
  { path: 'register', component: RegisterComponent, ...canActivate(redirectLoggedIn) },
  { path: 'wall', component: WallComponent , ...canActivate(redirectforbidden) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
