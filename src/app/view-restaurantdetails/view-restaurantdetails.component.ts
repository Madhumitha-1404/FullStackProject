import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-view-restaurantdetails',
  templateUrl: './view-restaurantdetails.component.html',
  styleUrls: ['./view-restaurantdetails.component.css']
})

/* Here we are implementing ng onit method for view by id and it moves  to get restaurant details by id 
ng onitmethod pass default constructor */
export class ViewRestaurantdetailsComponent implements OnInit {
  hotelId: number = 0;
  restaurant: any = [];
  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['hotelId']);
    this.hotelId = this.route.snapshot.params['hotelId'];

    this.restaurant = new Restaurant();
    this.restaurantService.getRestaurantdetailsById(this.hotelId).subscribe (data => {
      this.restaurant = data;
    });
  }
view(){
  var status= confirm(" Are you sure you go back to restaurant list");
  if(status==true){
  this.router.navigate(['/restaurant']);
}
}
}
