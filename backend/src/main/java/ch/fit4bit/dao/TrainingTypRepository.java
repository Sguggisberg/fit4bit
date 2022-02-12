package ch.fit4bit.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import ch.fit4bit.main.entity.TrainingTyp;

@Repository
@CrossOrigin("http://localhost:4200")
public interface TrainingTypRepository extends JpaRepository<TrainingTyp, Long> {

}
