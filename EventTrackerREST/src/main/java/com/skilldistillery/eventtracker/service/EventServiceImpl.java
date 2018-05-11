package com.skilldistillery.eventtracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.Event;
import com.skilldistillery.eventtracker.repository.EventRepository;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventRepository repo;

	@Override
	public List<Event> index() {
		return repo.findAll();
	}

	@Override
	public Event show(int id) {
		return repo.findById(id).get();
	}
	
	
	@Override
	public Event replace(Event jsonEvent, int id) {
	    Event e = repo.findById(id).get();
	    e.setPrice(jsonEvent.getPrice());
	    e.setGallons(jsonEvent.getGallons());
	    e.setDistance(jsonEvent.getDistance());
	    return e;
	}
		
	@Override
	public Event update(Event jsonEvent, int id) {
		Event e = repo.findById(id).get();
		if (jsonEvent.getPrice() != 0) {
			e.setPrice(jsonEvent.getPrice());
		}
		if (jsonEvent.getGallons() != 0) {
			e.setGallons(jsonEvent.getGallons());
		}
		if (jsonEvent.getDistance() != 0) {
			e.setDistance(jsonEvent.getDistance());
		}
		return e;
    }

	@Override
	public Boolean delete(int id) {
		repo.deleteById(id);
		return !repo.existsById(id);
	}

	@Override
	public Event create(Event event) {
		return repo.saveAndFlush(event);
	}
	
}
