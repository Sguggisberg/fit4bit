package ch.fit4bit.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import ch.fit4bit.entity.Payroll;

@Repository
@CrossOrigin("http://localhost:4200")
public interface PayrollRepository extends JpaRepository<Payroll, Long>{
	

}
