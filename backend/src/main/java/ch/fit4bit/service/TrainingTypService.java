package ch.fit4bit.service;

import java.util.List;
import java.util.Optional;

import ch.fit4bit.entity.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.TrainingTypRepository;
import ch.fit4bit.entity.TrainingTyp;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TrainingTypService {

	private final TrainingTypRepository trainingTypRepository;
	
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
	public TrainingTyp findByNameIgnoreCase(String name) {
		Optional<TrainingTyp> opt = trainingTypRepository.findByNameIgnoreCase(name);
		if (opt.isEmpty()) return null;
		return opt.get();
	}

}
