package ch.fit4bit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.TrainingTypRepository;
import ch.fit4bit.entity.TrainingTyp;

@Service
public class TrainingTypService {
	
	
	private TrainingTypRepository trainingTypRepository;
	
	@Autowired
	public TrainingTypService(TrainingTypRepository trainingTypRepository) {
		this.trainingTypRepository = trainingTypRepository;
	}

	public TrainingTyp create(TrainingTyp trainingTyp) {
		return trainingTypRepository.save(trainingTyp);
	}
	
	public List<TrainingTyp> getAllTrainingTyps(){
		return trainingTypRepository.findAll();
	}

	public TrainingTyp getTrainingTypById(Long id) {
		return trainingTypRepository.findById(id).get();
	}
	
	public TrainingTyp save(TrainingTyp t) {
		return trainingTypRepository.save(t);
	}
	
}
