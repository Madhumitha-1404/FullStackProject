package com.example.restaurant.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.restaurant.exception.ResourceNotFoundException;
import com.example.restaurant.model.SwiggyModel;
import com.example.restaurant.repository.RestaurantRepository;

/*@RestController-having 2 annotations:Response body and Controller
 * This annotation is used at the class level and allows the class to handle the requests made by the client. 
 * 
 * @RequestMapping-used to map the web request
 * 
 * */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Swiggy/")

public class RestaurantController {
	@Autowired
	private RestaurantRepository resRepo;
	
	/* @PostMapping- method handles the Http POST requests matched with the specified URL
	 * @RequestBody- Objects are passed as a parameter to swiggy model table
	 * 
	 * In this Mapping ,we get all the restaurant details in the form of Swiggy model object   */
	
		@PostMapping("/Restaurant")
		public SwiggyModel createRestaurantDetails(@RequestBody SwiggyModel hotel) {//obj=hotel
			return resRepo.save(hotel);
		}


		/* @GetMapping-Display all the details of the restaurants by using http  get request*/
	/*@GetMapping("/Restaurant")
	public List<SwiggyModel> getRestaurantDetails(){
		return resRepo.findAll();
	}	*/	

	/* @GetMapping-Display all the details of the restaurant of a particular id. to get this id ,we use @PathVariable 
	 * by using http  get request*/
	
	@GetMapping("/Restaurant/{hotelId}")
	public ResponseEntity<SwiggyModel> getRestaurantdetailsById(@PathVariable  ("hotelId") int hotelId) {
		SwiggyModel hotel = resRepo.findById(hotelId)
				.orElseThrow(() -> new ResourceNotFoundException("RestaurantDetails not exist with id :" + hotelId));
		return ResponseEntity.ok(hotel);
	}
	
	/*@PutMapping- Update the restaurant details of the particular id. By using @DynamicUpdate we change the 
	 * particular attribute by using http put request */

	@PutMapping("/Restaurant/{hotelId}")
	public ResponseEntity<SwiggyModel> updateRestaurant(@PathVariable ("hotelId")int hotelId, @RequestBody SwiggyModel hotelDetails ){
		SwiggyModel newhotel = resRepo.findById(hotelId)
				.orElseThrow(() -> new ResourceNotFoundException("RestaurantDetails not exist with id :" + hotelId));

		newhotel.setRestaurantName(hotelDetails.getRestaurantName());
		newhotel.setLocation(hotelDetails.getLocation());
		newhotel.setFoodType(hotelDetails.getFoodType());

		SwiggyModel updateRestaurant = resRepo.save(newhotel);
		return ResponseEntity.ok(updateRestaurant);
	}

	/*@DeleteMapping-Delete the particular id of the restaurant detail by using http delete request*/
	
	@DeleteMapping("/Restaurant/{hotelId}")
	public ResponseEntity<Map<String, Boolean>> deleteRestaurantById(@PathVariable ("hotelId")int hotelId){
		SwiggyModel hotel = resRepo.findById(hotelId)
				.orElseThrow(() -> new ResourceNotFoundException("RestaurantDetails not exist with id :" + hotelId));

		resRepo.delete(hotel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("/Restaurant")
	public ResponseEntity<HttpStatus> deleteAllRestaurantDetails(){
		try {
			resRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	
	@GetMapping("/Restaurant")
	public ResponseEntity<List<SwiggyModel>> getRestaurantDetails(@RequestParam (required= false) String restaurantName){
		
		try {
			List<SwiggyModel> resList= new ArrayList<SwiggyModel>();
			if(restaurantName != null) {
				resRepo.findByRestaurantName(restaurantName).forEach(resList::add);
				return new ResponseEntity<>(resList,HttpStatus.OK);
			}
		
		else {
			resList =resRepo.findAll();
			return new ResponseEntity<>(resList,HttpStatus.OK);
		}
		}catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.OK);
		}
	}
	@GetMapping("/Restaurant/veg")
	public ResponseEntity<List<SwiggyModel>> findByVegHotel(){
		try {
			List<SwiggyModel> vegHotelList=resRepo.findByfoodType("veg");
			if(vegHotelList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(vegHotelList,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
@GetMapping("/Restaurant/nonveg")
public ResponseEntity<List<SwiggyModel>> findByNonVegHotel(){
	try {
		List<SwiggyModel> nonVegHotelList=resRepo.findByfoodType("nonveg");
		if(nonVegHotelList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<>(nonVegHotelList,HttpStatus.OK);
	}
	catch(Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

	}
}
	
	
	
}
