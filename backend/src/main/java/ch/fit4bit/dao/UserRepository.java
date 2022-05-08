package ch.fit4bit.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import ch.fit4bit.entity.User;


@Repository
@CrossOrigin("http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByUsername(String name);

}