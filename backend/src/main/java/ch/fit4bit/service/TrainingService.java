package ch.fit4bit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.TrainingRepository;
import ch.fit4bit.main.entity.Training;

@Service
public class TrainingService {
	
	private TrainingRepository trainingRepository;
	
	@Autowired
	public TrainingService(TrainingRepository trainingRepository) {
		this.trainingRepository = trainingRepository;
	}

	public Training create (Training training) {
		return trainingRepository.save(training);
	}
	
}
