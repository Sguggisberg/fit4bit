package ch.fit4bit.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.fit4bit.main.dto.TrainingDTO;
import ch.fit4bit.main.entity.Training;
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
	
}
