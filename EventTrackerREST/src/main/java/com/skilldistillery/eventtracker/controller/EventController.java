package com.skilldistillery.eventtracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.Event;
import com.skilldistillery.eventtracker.service.EventService;

//Configures the app to accept all traffic from 4200 because
//Angular runs on a separate server (port 4200)
@CrossOrigin({ "*", "http://localhost:4200" })
@RestController
@RequestMapping("api")
public class EventController {

	@Autowired
	private EventService service;
	
	// PING() WORKS
	@RequestMapping(path = "ping", method=RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	// END OF PING()
	
	// INDEX() WORKS
	@RequestMapping(path = "events", method = RequestMethod.GET)
	public List<Event> index() {
		return service.index();
	}
	// END OF INDEX()
	
	// SHOW() WORKS
	@RequestMapping(path = "events/{id}", method = RequestMethod.GET)
	public Event show(@PathVariable("id") int id) {
		return service.show(id);
	}
	// END OF SHOW()
	
	// CREATE()
	@RequestMapping(path = "events", method = RequestMethod.POST)
	public Event create(@RequestBody Event event) {
		return service.create(event);
	}
	// END OF CREATE()
	
	// REPLACE() WORKS
	@RequestMapping(path = "events/{id}", method = RequestMethod.PUT)
	public Event replace(@RequestBody Event event, @PathVariable("id") int id) {
		return service.replace(event, id);	
	}
	// END OF REPLACE()
	
	// UPDATE() WORKS
	@RequestMapping(path = "events/{id}", method = RequestMethod.PATCH)
	public Event update(@RequestBody Event event, @PathVariable("id") int id) {
		return service.update(event, id);
	}
	// END OF UPDATE()
	
	// DELETE() WORKS
	@RequestMapping(path = "events/{id}", method = RequestMethod.DELETE)
	public Boolean delete(@PathVariable("id") int id) {
		return service.delete(id);
	}
	// END OF DELETE()
	
	
	
	
	
	
	
	
	
	
	
	
}
