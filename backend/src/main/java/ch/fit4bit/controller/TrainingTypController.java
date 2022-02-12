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

import ch.fit4bit.main.dto.TrainingTypDTO;
import ch.fit4bit.main.dto.UserDto;
import ch.fit4bit.main.entity.TrainingTyp;
import ch.fit4bit.main.entity.User;
import ch.fit4bit.service.TrainingTypService;

@RestController
@RequestMapping(path = "/api/trainingtyp")
@CrossOrigin(origins = "http://localhost:4200")
public class TrainingTypController {

	
	private TrainingTypService trainingTypService;
	private ModelMapper modelMapper;
	
	@Autowired
	public TrainingTypController(TrainingTypService trainingTypService, ModelMapper modelMapper) {
		this.trainingTypService=trainingTypService;
		this.modelMapper = modelMapper;
	}
	
	@PostMapping
	public ResponseEntity<?> create(@RequestBody TrainingTypDTO trainingTypDTO) {
		trainingTypService.create(modelMapper.map(trainingTypDTO, TrainingTyp.class));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	
}
