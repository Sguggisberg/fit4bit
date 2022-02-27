package ch.fit4bit.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.RoomRepository;
import ch.fit4bit.main.entity.Room;


@Service
public class RoomService {
	private static final Logger LOG = LoggerFactory.getLogger(RoomService.class);

	private RoomRepository roomRepository;

	@Autowired
	public RoomService(RoomRepository roomRepository) {
		this.roomRepository = roomRepository;	
	}

	public Room create (Room newRoom) {
		return roomRepository.save(newRoom);
	}

	public List<Room> getAllRooms() {
		return roomRepository.findAll();
	}
	
}
