import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { LandingAboutComponent } from './components/landing-about/landing-about.component';
import { LandingWorkComponent } from './components/landing-work/landing-work.component';
import { LandingHireComponent } from './components/landing-hire/landing-hire.component';
import { HirePageComponent } from './pages/hire-page/hire-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'hire', component: HirePageComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactPageComponent,
    WelcomeComponent,
    AppFooterComponent,
    LandingAboutComponent,
    LandingWorkComponent,
    LandingHireComponent,
    HirePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
