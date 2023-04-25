import { Component } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* App component is the head component of all sub components. here we are giving the title of our project*/
export class AppComponent {
  title = 'Restaurant';
  constructor(public loginService:AuthenticateService,private router:Router) { }
  ngOnInit() {

  }
  /* these method is used to confirm logout by user */
  confirmLogout(){
    var status= confirm("Are you sure want to logout?");
     if (status==true) {
       this.router.navigate(['feedback-page']);
     }
     else{
      this.router.navigate(['restaurant']);
     }
}
}
