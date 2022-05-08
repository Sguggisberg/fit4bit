package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.fit4bit.dto.TrainingDTO;
import ch.fit4bit.entity.Training;
import ch.fit4bit.service.TrainingService;

@RestController
@RequestMapping(path = "/api/training")
@CrossOrigin(origins = "http://localhost:4200")
public class TrainingController {

	private TrainingService trainingService;
	private ModelMapper modelMapper;

	@Autowired
	public TrainingController(TrainingService trainingService, ModelMapper modelMapper) {
		this.trainingService = trainingService;
		this.modelMapper = modelMapper;
	}

	@PostMapping
	public ResponseEntity<?> create(@RequestBody TrainingDTO trainingDto) {
		trainingService.create(modelMapper.map(trainingDto, Training.class));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

	@GetMapping("")
	@PreAuthorize("hasAnyAuthority('ROLE_SUPERIOR')")
	public List<TrainingDTO> getAll() {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
		List<Training> allTrainings = trainingService.getAllTraining();
		List<TrainingDTO> allTrainingsDto = new ArrayList<>();
		for (Training training : allTrainings) {
			allTrainingsDto.add(modelMapper.map(training, TrainingDTO.class));
		}
		return allTrainingsDto;
	}

	@GetMapping("/trainer")
	public List<TrainingDTO> getAllByTrainer() {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
		List<Training> allTrainings = trainingService.getAllTrainingByUser();
		List<TrainingDTO> allTrainingsDto = new ArrayList<>();
		for (Training training : allTrainings) {
			allTrainingsDto.add(modelMapper.map(training, TrainingDTO.class));
		}
		return allTrainingsDto;
	}


	@GetMapping("/{id}")
	@PreAuthorize("@trainerSecurity.isOwner() || hasAnyAuthority('ROLE_SUPERIOR')")
	public TrainingDTO findById(@PathVariable Long id) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
		Training t = trainingService.findTrainingById(id);
		return modelMapper.map(t, TrainingDTO.class);
	}
	
	@PutMapping
	public ResponseEntity<?> patch(@RequestBody TrainingDTO trainingDto){
		Training t = trainingService.findTrainingById(trainingDto.getId());
		t.setAmountOfCustomer(trainingDto.getAmountOfCustomer());
		trainingService.patch(t);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);

	}

}
