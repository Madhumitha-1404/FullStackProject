import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-create-restaurantdetails',
  templateUrl: './create-restaurantdetails.component.html',
  styleUrls: ['./create-restaurantdetails.component.css']
})
export class CreateRestaurantdetailsComponent implements OnInit {

  restaurant: Restaurant = new Restaurant();
  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveRestaurant(){
   this.restaurantService.createRestaurantDetails(this.restaurant).subscribe( data =>{
      console.log(data);
      var status=confirm("inserted successfully");
      if(status==true){
        this.router.navigate(['/restaurant']);
      }
      else{
        this.router.navigate(['/create-restaurantdetails']);
      }
    },
    error => console.log(error));
  }

  goToRestaurantList(){
    this.router.navigate(['/restaurant']);
  }


/*Onsubmit method allows users to submit their name and address using [(ng model)](event binding) . */ 
  onSubmit(){
    console.log(this.restaurant);
    this.saveRestaurant();
  }
}


