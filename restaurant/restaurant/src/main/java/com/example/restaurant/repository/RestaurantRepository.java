package com.example.restaurant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restaurant.model.SwiggyModel;

/*@Repository-is used to indicate that the class provides the mechanism for storage, retrieval, search, update and delete operation on objects  
JPA Repository is mainly used for managing the data in a Spring Boot Application*/
/*JpaRepository<Table,Primarykey datatype>
/*JpaRepository<SwiggyModel,Integer>*/

@Repository
public interface RestaurantRepository extends JpaRepository<SwiggyModel,Integer> {
	List<SwiggyModel> findByRestaurantName(String restaurantName);
	List<SwiggyModel> findByfoodType(String foodType);
}
