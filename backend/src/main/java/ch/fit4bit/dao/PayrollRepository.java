package ch.fit4bit.dao;

import ch.fit4bit.entity.User;
import ch.fit4bit.model.BillState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import ch.fit4bit.entity.Payroll;

import java.util.List;

@Repository
@CrossOrigin("http://localhost:4200")
public interface PayrollRepository extends JpaRepository<Payroll, Long>{
	

    List<Payroll> findAllByUser(User user);

    List<Payroll> findAllByBillState(BillState billState);
    Payroll findByIdAndUser(Long id, User user);


}
