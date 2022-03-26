package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.fit4bit.main.dto.UserDto;
import ch.fit4bit.main.entity.User;
import ch.fit4bit.service.UserService;

@RestController
@RequestMapping(path = "/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	private UserService userService;
	private ModelMapper modelMapper;

	@Autowired
	public UserController(UserService userService, ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
		this.userService = userService;
	}

	@PostMapping
	public ResponseEntity<?> create(@RequestBody UserDto userDTO) {
		userService.create(modelMapper.map(userDTO, User.class));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping
	public List<UserDto> getAllUsers(){
		List<User> allUser = userService.getAllUsers();
		List<UserDto>  allUsersDto = new ArrayList<>();
		for (User user: allUser) {
			allUsersDto.add(modelMapper.map(user, UserDto.class));
		}
		return allUsersDto;
	
	}
	
	
}
