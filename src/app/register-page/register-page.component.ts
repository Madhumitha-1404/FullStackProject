import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  username='' ;
  email= '' ;
  password= '' ;
  confirmpassword= '' ;
  constructor(
    private loginService: AuthenticateService,
    private router: Router) {

  }


  ngOnInit(){
    
  } 
  /* this method is used to required for username,password,email and confirm password*/

  requiredValue(){
    if(this.username ===''|| this.email===''|| this.password===''|| this.confirmpassword===''){
      var status= confirm("Please fill mandatory fields");
    }
    else{
    alert("registered successfully");
this.router.navigate(['loginpage']);
  }
  
  
      
    }
}
