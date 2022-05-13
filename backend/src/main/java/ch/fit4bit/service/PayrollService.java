package ch.fit4bit.service;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import ch.fit4bit.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.PayrollRepository;
import ch.fit4bit.dao.TrainingRepository;
import ch.fit4bit.dto.PayrollAddTrainingDto;
import ch.fit4bit.entity.Payroll;
import ch.fit4bit.entity.Training;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PayrollService {

	private final PayrollRepository payrollRepository;
	private final TrainingRepository trainingRepository;

	private final UserService userService;

	@Autowired
	public PayrollService(PayrollRepository payrollRepository, TrainingRepository trainingRepository, UserService userService) {
		this.payrollRepository = payrollRepository;
		this.trainingRepository = trainingRepository;
		this.userService = userService;
	}

	public List<Payroll> findAllOwnPayrolls() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findByUserName(authentication.getName());
		return payrollRepository.findAllByUser(user);
	}

	public Payroll creat(Payroll payroll) {
		return payrollRepository.save(payroll);
	}

	public Payroll addTrainings(PayrollAddTrainingDto payrollAddTrainingDto) {
		Payroll storedPayroll = payrollRepository.getById(payrollAddTrainingDto.getId());
		storedPayroll.setTrainings(Collections.emptySet());
		Set<Training> trainingsToUpadet = new HashSet<>();

		for (Long trainingId : payrollAddTrainingDto.getTrainingIds()) {
			Training trainingToUpdate = trainingRepository.findById(trainingId).get();
			trainingToUpdate.setPayroll(storedPayroll);
		}

		trainingRepository.saveAll(trainingsToUpadet);
		return payrollRepository.save(storedPayroll);
	}
}
