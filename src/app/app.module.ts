import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AssetsPageComponent } from './assets-page/assets-page.component';
import { AssetDetailsPAgeComponent } from './asset-details-page/asset-details-page.component';

import { AssetService } from './asset.service'
import { AuthGuardService } from './auth-guard.service'
import { AuthenticationService } from './authentication.service'

const appRoutes: Routes = [
//the top path is setting the default view for routeroutlet
  { path: '', redirectTo: 'WelcomePageComponent', pathMatch: 'full'},
  { path: 'WelcomePageComponent', component: WelcomePageComponent },
  { path: 'LoginPageComponent', component: LoginPageComponent },
  { path: 'AssetsPageComponent', component: AssetsPageComponent },
  { path: 'AssetDetailsPAgeComponent', component: AssetDetailsPAgeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    AssetsPageComponent,
    AssetDetailsPAgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AssetService, AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
