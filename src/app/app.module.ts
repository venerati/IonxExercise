import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AssetsPageComponent } from './assets-page/assets-page.component';
import { AssetDetailsPAgeComponent } from './asset-details-page/asset-details-page.component';

const appRoutes: Routes = [
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
