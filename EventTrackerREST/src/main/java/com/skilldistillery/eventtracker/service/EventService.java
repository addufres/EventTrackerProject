package com.skilldistillery.eventtracker.service;

import java.util.List;

import com.skilldistillery.eventtracker.Event;

public interface EventService {

	List<Event> index();

	Event show(int id);

	Event replace(Event jsonEvent, int id);

	Event update(Event jsonEvent, int id);

	Boolean delete(int id);

	Event create(Event event);

}
