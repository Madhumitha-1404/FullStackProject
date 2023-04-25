import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})

/*these methods are converting front end to backend by base url .In backend there is a cross origin and search for the respective mappings*/
export class RestaurantService {
  private baseURL = "http://localhost:8080/Swiggy/Restaurant";

  constructor(private httpClient: HttpClient) { }

  getRestaurantDetails(): Observable<Restaurant[]>{ /* Obervable is a return type */
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}`);
  }

  createRestaurantDetails(restaurant : Restaurant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, restaurant);
  }

  getRestaurantdetailsById(hotelId: number): Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.baseURL}/${hotelId}`);
  }

  updateRestaurant(hotelId: number, restaurant: Restaurant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${hotelId}`, restaurant);
  }

  //localhost:4200/delete/5
  deleteRestaurant(hotelId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${hotelId}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);

  }
  findByName(restaurantName:any): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}?restaurantName=${restaurantName}`);
  }
  findByVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/veg`);
  }
  findByNonVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/nonveg`);
  }
  
}
