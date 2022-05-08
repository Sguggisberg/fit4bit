package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ch.fit4bit.dto.RoomDto;
import ch.fit4bit.entity.Room;
import ch.fit4bit.service.RoomService;

@RestController
@RequestMapping(path = "/api/room")
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {

	private RoomService roomService;
	private ModelMapper modelMapper;

	@Autowired
	public RoomController(RoomService roomService, ModelMapper modelMapper) {
		this.roomService = roomService;
		this.modelMapper = modelMapper;
	}

	@PreAuthorize("hasAnyAuthority('ROLE_SUPERIOR')")
	@PostMapping
		public ResponseEntity<?> create(@RequestBody RoomDto newRoom) {
		roomService.create(modelMapper.map(newRoom, Room.class));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}


	@GetMapping
	public List<RoomDto> getAllRooms() {
		List<Room> allRooms = roomService.getAllRooms();
		List<RoomDto> allRoomsDto = new ArrayList<>();
		for (Room room : allRooms) {
			allRoomsDto.add(modelMapper.map(room, RoomDto.class));
		}
		return allRoomsDto;
	}
}
