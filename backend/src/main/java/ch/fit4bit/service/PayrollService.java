package ch.fit4bit.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.PayrollRepository;
import ch.fit4bit.dao.TrainingRepository;
import ch.fit4bit.main.dto.PayrollAddTrainingDto;
import ch.fit4bit.main.entity.Payroll;
import ch.fit4bit.main.entity.Training;

@Service
public class PayrollService {

	private PayrollRepository payrollRepository;
	private TrainingRepository trainingRepository;

	@Autowired
	public PayrollService(PayrollRepository payrollRepository, TrainingRepository trainingRepository) {
		this.payrollRepository = payrollRepository;
		this.trainingRepository = trainingRepository;
	}

	public List<Payroll> findAll() {
		return payrollRepository.findAll();
	}

	public Payroll creat(Payroll payroll) {
		return payrollRepository.save(payroll);
	}

	public Payroll addTrainings(PayrollAddTrainingDto payrollAddTrainingDto) {
		Payroll storedPayroll = payrollRepository.getById(payrollAddTrainingDto.getId());
		Set<Training> trainingsToUpadet = new HashSet<>();

		for (Long trainingId : payrollAddTrainingDto.getTrainingIds()) {
			Training trainingToUpdate = trainingRepository.findById(trainingId).get();
			trainingsToUpadet.add(trainingToUpdate);
		}

		storedPayroll.getTrainings().addAll(trainingsToUpadet);
		return payrollRepository.save(storedPayroll);
	}
}
