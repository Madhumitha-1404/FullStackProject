import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{
  username = '';
  password = '';
  invalidLogin = false;
  emessage!: string;

  constructor(private router: Router,
    private loginservice : AuthenticateService){}


  ngOnInit()  {

  }
    
  checkLogin(){
    if (this.loginservice.authenticate(this.username, this.password) 
    ){
      this.router.navigate(['homepage']);
      console.log("navigate..");
      this.invalidLogin = false;
      alert("Logged in successfully");
    }else 
    this.invalidLogin = true;
    this .emessage ='Username or password is invalid';
}
/*if(this.username=== '' || this.password === ''){
  var status = confirm("It is required to fill all the fields");
}
else{
var status=confirm("Logged in successfully");
if(status==true){
this.router.navigate(['homepage'])
}

}
 
  }*/
}



