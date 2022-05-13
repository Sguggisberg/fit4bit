package ch.fit4bit.dao;

import ch.fit4bit.entity.Payroll;
import ch.fit4bit.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import ch.fit4bit.entity.Training;

import java.util.List;

@Repository
@CrossOrigin("http://localhost:4200")
public interface TrainingRepository extends JpaRepository<Training, Long>{

    List<Training> findByUser(User user);
    Training findByUserAndId(User user, Long id);
    List<Training> findByUserAndPayroll(User user, Payroll payroll);


}
