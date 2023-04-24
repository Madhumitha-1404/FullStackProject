import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantdetailsComponent } from './create-restaurantdetails/create-restaurantdetails.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantdetailsComponent } from './update-restaurantdetails/update-restaurantdetails.component';
import { ViewRestaurantdetailsComponent } from './view-restaurantdetails/view-restaurantdetails.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuardService } from './auth-guard.service';



/* there are the path for the sub components and we are importing the respective components*/
const routes: Routes = [
  {path: 'restaurant', component: RestaurantListComponent,canActivate:[AuthGuardService]  },
  {path: 'create-restaurantdetails', component: CreateRestaurantdetailsComponent,canActivate:[AuthGuardService]},
  {path: '', redirectTo: 'loginpage', pathMatch: 'full'},/*this path can be redirect to login page */
  {path: 'update-Restaurant/:hotelId', component: UpdateRestaurantdetailsComponent,canActivate:[AuthGuardService]},
  {path: 'restaurant/:hotelId', component: ViewRestaurantdetailsComponent,canActivate:[AuthGuardService]},
  {path: 'loginpage',component: LoginpageComponent},
  {path: 'register-page',component: RegisterPageComponent },
  {path: 'logout-page',component: LogoutPageComponent,canActivate:[AuthGuardService] },
  {path: 'profile-card',component:  ProfileCardComponent ,canActivate:[AuthGuardService]},
  {path: 'contact-us',component:  ContactUsComponent,canActivate:[AuthGuardService] },
  {path: 'feedback-page',component:  FeedbackPageComponent ,canActivate:[AuthGuardService] },
  {path: 'about-us',component:   AboutUsComponent ,canActivate:[AuthGuardService]},
  {path: 'homepage',component:   HomepageComponent ,canActivate:[AuthGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
