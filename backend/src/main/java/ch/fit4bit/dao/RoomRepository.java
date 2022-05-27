package ch.fit4bit.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import ch.fit4bit.entity.Room;


@Repository
@CrossOrigin("http://localhost:4200")
public interface RoomRepository extends JpaRepository<Room, Long> {

	Optional<Room> findByNameIgnoreCase(String name);

}
