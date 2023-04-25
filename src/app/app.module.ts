import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRestaurantdetailsComponent } from './create-restaurantdetails/create-restaurantdetails.component';
import { ViewRestaurantdetailsComponent } from './view-restaurantdetails/view-restaurantdetails.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantdetailsComponent } from './update-restaurantdetails/update-restaurantdetails.component';
import { FormsModule} from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';


/* we are importing head component and the respective sub components*/
@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantdetailsComponent,
    ViewRestaurantdetailsComponent,
    RestaurantListComponent,
    UpdateRestaurantdetailsComponent,
    LoginpageComponent,
    RegisterPageComponent,
    LogoutPageComponent,
    ProfileCardComponent,
    ContactUsComponent,
    FeedbackPageComponent,
    AboutUsComponent,
    HomepageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
