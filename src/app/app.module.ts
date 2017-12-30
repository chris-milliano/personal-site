import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { LandingAboutComponent } from './components/landing-about/landing-about.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'contact', component: ContactPageComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactPageComponent,
    WelcomeComponent,
    AppFooterComponent,
    LandingAboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
