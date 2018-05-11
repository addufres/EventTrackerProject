package com.skilldistillery.eventtracker;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Event {
	// FIELDS
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private double price;
	
	private double gallons;
	
	private double distance;

	// GETTERS AND SETTERS
	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getGallons() {
		return gallons;
	}

	public void setGallons(double gallons) {
		this.gallons = gallons;
	}

	public double getDistance() {
		return distance;
	}

	public void setDistance(double distance) {
		this.distance = distance;
	}

	public int getId() {
		return id;
	}

	// CONSTRUCTORS
	public Event(int id, double price, double gallons, double distance) {
		super();
		this.id = id;
		this.price = price;
		this.gallons = gallons;
		this.distance = distance;
	}
	public Event() {}
	
	
}
