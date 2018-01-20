import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { LandingAboutComponent } from './components/landing-about/landing-about.component';
import { RecruiterWorkComponent } from './components/recruiter-work/recruiter-work.component';
import { LandingHireComponent } from './components/landing-hire/landing-hire.component';
import { HirePageComponent } from './pages/hire-page/hire-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { LandingWorkComponent } from './components/landing-work/landing-work.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'hire', component: HirePageComponent },
    { path: 'work', component: WorkPageComponent  }
]


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactPageComponent,
    WelcomeComponent,
    AppFooterComponent,
    LandingAboutComponent,
    RecruiterWorkComponent,
    LandingHireComponent,
    HirePageComponent,
    WorkPageComponent,
    LandingWorkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
