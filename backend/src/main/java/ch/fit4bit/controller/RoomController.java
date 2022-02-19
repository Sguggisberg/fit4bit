package ch.fit4bit.controller;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.fit4bit.main.dto.RoomDto;
import ch.fit4bit.main.entity.Room;
import ch.fit4bit.service.RoomService;

@RestController
@RequestMapping(path = "/api/room")
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {

	private RoomService roomService;
	private ModelMapper modelMapper;
	
	public RoomController(RoomService roomService, ModelMapper modelMapper) {
		this.roomService = roomService;
		this.modelMapper = modelMapper;
	}

	@PostMapping
	public ResponseEntity<?> create(@RequestBody RoomDto newRoom) {
		roomService.create(modelMapper.map(newRoom, Room.class));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
