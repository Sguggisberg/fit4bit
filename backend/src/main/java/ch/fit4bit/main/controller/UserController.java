package ch.fit4bit.main.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dto.UserDto;



@RestController
@RequestMapping(path = "/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@PostMapping
	public ResponseEntity<?> create(@RequestBody UserDto userDTO) {
				 return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
