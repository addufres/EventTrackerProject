package com.skilldistillery.eventtracker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootController {

	@RequestMapping(path="/")
	public String index() {
		return "index.html";
	}
}
