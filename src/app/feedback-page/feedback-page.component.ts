import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {
  constructor(
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  /* this method is used for validation  */ 
exit(){
 /* alert("Submitted successfully");*/
{
  var status= confirm("Are you sure want to logout?");
   if (status==true) {
     this.router.navigate(['logout-page']);
   }
   else{
    this.router.navigate(['feedback-page']);
   }

}
      
}
}
