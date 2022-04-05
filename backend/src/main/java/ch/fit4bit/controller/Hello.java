package ch.fit4bit.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/hello")
@CrossOrigin(origins = "http://localhost:4200")
public class Hello {

	
	@GetMapping
	public String hello() {
		return "hello";
	}
	
}
