package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ch.fit4bit.dto.RoomDto;
import ch.fit4bit.entity.Room;
import ch.fit4bit.service.RoomService;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api/room")
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {

    private final RoomService roomService;
    private final ModelMapper modelMapper;

    @Autowired
    public RoomController(RoomService roomService, ModelMapper modelMapper) {
        this.roomService = roomService;
        this.modelMapper = modelMapper;
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERIOR')")
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody RoomDto newRoom) {
        try {
            roomService.create(modelMapper.map(newRoom, Room.class));
        } catch (DataIntegrityViolationException dataIntegrityViolationException) {
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
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

    @GetMapping("/{name}")
    public ResponseEntity<RoomDto> findById(@PathVariable String name) {
        Room room = roomService.findByNameIgnoreCase(name);
        if (Objects.equals(room, null)) {
            return new ResponseEntity<>(null,HttpStatus.OK);
        }
        RoomDto roomDto = new RoomDto();
        roomDto.setName(room.getName());
        roomDto.setId(room.getId());
        return new ResponseEntity<>(roomDto, HttpStatus.OK);
    }

}
