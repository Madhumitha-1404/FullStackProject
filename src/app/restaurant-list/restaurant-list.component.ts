import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurant: Restaurant[] = [];
  restaurantName: any;

/* here we are creatingmethods to view all the restaurant details like update,delete,view by restaurant id,
 search by restaurant name,search by veg and nonveg hotel and remove all restaurants*/
  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRestaurant();
  }

  private getRestaurant(){
    this.restaurantService.getRestaurantDetails().subscribe(data => {
      this.restaurant = data;


    });
  }

  restaurantDetails(hotelId: number){
    this.router.navigate(['restaurant', hotelId]);
  }

  updateRestaurant(hotelId: number){
    this.router.navigate(['update-Restaurant', hotelId]);
  }

  deleteRestaurant(hotelId: number){
    this.restaurantService.deleteRestaurant(hotelId).subscribe (data => {
      console.log(data);
      this.getRestaurant();
    })
  }

    confirmDelete(restaurant: Restaurant){
      var status= confirm("Are you sure you want to delete this record?");
       if (status==true) {
         this.deleteRestaurant(restaurant.hotelId);
            }
       else{
        this.getRestaurant();
       }

        
  }
  removeAllRestaurant(): void{

    this.restaurantService.deleteAll().subscribe(
      data=> {
        console.log(data);
        this.getRestaurant();
      },
      error => {
        console.log(error);
      });
  }

  searchByName(){
    this.restaurantService.findByName(this.restaurantName).subscribe(data=>{
      this.restaurant=data;
      console.log(data);
    },
    error=>{
      console.log(error);
    }
    );
    
  }
  confirmDeleteAll(){
    var status= confirm(" All the records will be deleted .Are you sure did you want to delete  record?");
     if (status==true) {
       this.removeAllRestaurant();
          }
     else{
      this.getRestaurant();
     }
  }
  fetchVegHotel(){
    this.restaurantService.findByVegRestaurant().subscribe(
      data => {
        this.restaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  fetchNonVegHotel(){
    this.restaurantService.findByNonVegRestaurant().subscribe(
      data => {
        this.restaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
