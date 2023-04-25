import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {
  constructor(
    private authenticateService: AuthenticateService,
    private router: Router) {

  }

  ngOnInit() {
   this.authenticateService .logout() ;
  
  }
  confirmLogout(){
    var status= confirm("Are you sure want to logout?");
     if (status==true) {
       this.router.navigate(['logout-page']);
     }
     else{
      this.router.navigate(['restaurant']);
     }
     
      
}
login(){
  var status= confirm("Are you sure want to  go login ?");
  if (status==true) {
    this.router.navigate(['loginpage']);
  }
  else{
   this.router.navigate(['logout-page']);
  }
}

}
