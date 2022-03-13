package ch.fit4bit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.PayrollRepository;
import ch.fit4bit.main.entity.Payroll;

@Service
public class PayrollService {

	private PayrollRepository payrollRepository;

	@Autowired
	public PayrollService(PayrollRepository payrollRepository) {
		this.payrollRepository = payrollRepository;
	}

	public List<Payroll> findAll() {
		return payrollRepository.findAll();
	}

	public Payroll creat(Payroll p11) {
		return payrollRepository.save(p11);
	}
}
