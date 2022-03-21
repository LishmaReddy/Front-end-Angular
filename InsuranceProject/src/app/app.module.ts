
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { TopnavComponent } from './mycomponent/topnav/topnav.component';
import { LogocomponentComponent } from './mycomponent/logocomponent/logocomponent.component';
import { TextcomponentComponent } from './mycomponent/textcomponent/textcomponent.component';
import { ContactusComponent } from './mycomponent/topnav/contactus/contactus.component';
import { AboutusComponent } from './mycomponent/topnav/aboutus/aboutus.component';
import { HelppageComponent } from './mycomponent/topnav/helppage/helppage.component';
import { FaqpageComponent } from './mycomponent/topnav/faqpage/faqpage.component';
import { LoginpageComponent } from './mycomponent/topnav/loginpage/loginpage.component';
import { HomeComponent } from './mycomponent/topnav/home/home.component';
import { EstimateCalculationComponent } from './mycomponent/estimate-calculation/estimate-calculation.component';
import { BikePriCalComponent } from './mycomponent/estimate-calculation/bike-pri-cal/bike-pri-cal.component';
import { CarPriCalComponent } from './mycomponent/estimate-calculation/car-pri-cal/car-pri-cal.component';


const appRoutes:Routes=[
  
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login', component:LoginpageComponent} ,
  
  {path:'home', component:HomeComponent} ,
  {path:'contactus', component:ContactusComponent} ,
  {path:'aboutus', component:AboutusComponent} ,
  {path:'helppage', component:HelppageComponent} ,
  {path:'faqpage', component:FaqpageComponent} ,
  {path:'estimate-calculation', component:EstimateCalculationComponent} ,
  {path:'BikePriCalComponent', component:BikePriCalComponent} ,
  {path:'CarPriCalComponent', component:CarPriCalComponent} 
  
  
  ,
]

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    TopnavComponent,
    LogocomponentComponent,
    TextcomponentComponent,
    ContactusComponent,
    AboutusComponent,
    HelppageComponent,
    FaqpageComponent,
    HomeComponent,
    EstimateCalculationComponent,
    BikePriCalComponent,
    CarPriCalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 