package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ch.fit4bit.dto.TrainingTypDTO;
import ch.fit4bit.entity.TrainingTyp;
import ch.fit4bit.service.TrainingTypService;

@RestController
@RequestMapping(path = "/api/trainingtyp")
@CrossOrigin(origins = "http://localhost:4200")
public class TrainingTypController {

	private final TrainingTypService trainingTypService;
	private final ModelMapper modelMapper;

	@Autowired
	public TrainingTypController(TrainingTypService trainingTypService, ModelMapper modelMapper) {
		this.trainingTypService = trainingTypService;
		this.modelMapper = modelMapper;
	}
	@PostMapping
	public ResponseEntity<?> create(@RequestBody TrainingTypDTO trainingTypDTO) {
		trainingTypService.create(modelMapper.map(trainingTypDTO, TrainingTyp.class));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

	@GetMapping
	public List<TrainingTypDTO> getAllTrainingTyps() {
		List<TrainingTyp> allTrainingTyps = trainingTypService.getAllTrainingTyps();
		List<TrainingTypDTO> allRoomsDto = new ArrayList<>();
		for (TrainingTyp trainingTyp : allTrainingTyps) {
			allRoomsDto.add(modelMapper.map(trainingTyp, TrainingTypDTO.class));
		}
		return allRoomsDto;
	}

	@GetMapping("/{name}")
	public ResponseEntity<TrainingTypDTO> findById(@PathVariable String name) {
		TrainingTyp trainingTyp = trainingTypService.findByNameIgnoreCase(name);
		if (Objects.equals(trainingTyp, null)) {
			return new ResponseEntity<>(null,HttpStatus.OK);
		}
		TrainingTypDTO trainingTypDTO = new TrainingTypDTO();
		trainingTypDTO.setName(trainingTyp.getName());
		trainingTypDTO.setId(trainingTyp.getId());
		return new ResponseEntity<>(trainingTypDTO, HttpStatus.OK);
	}

}
