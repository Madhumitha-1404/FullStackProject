import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

NAME='';
EMAIL='';
SUBJECT='';
  constructor(public loginService:AuthenticateService,private router:Router) { }

  ngOnInit(): void {
   
  }
   
  
  /* submit(){
    var status=confirm("submitted!");
      if(status==true){
        this.router.navigate(['/restaurant']);
      }
   }*/

   contact(){
    if(this.NAME === '' || this.EMAIL === '' ||  this.SUBJECT ===''){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
  var status=confirm("Thanks for contact us we will reach you again");
  if(status==true){
    this.router.navigate(['Restaurant'])
  }
  
}
}
}
