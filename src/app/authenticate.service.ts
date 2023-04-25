import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
/* authenticate service is used to check the current credentials of username and password */
  constructor() { }

  authenticate(username : any, password : any){
    if(username === "madhumitha" && password === "madhu@123"){
      sessionStorage.setItem('username',username)
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user===null))
    return !(user===null)
  }
  logout(){
    sessionStorage.removeItem('username')
  }
}
