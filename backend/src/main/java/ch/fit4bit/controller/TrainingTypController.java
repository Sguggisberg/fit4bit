package ch.fit4bit.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ch.fit4bit.dto.TrainingTypDTO;
import ch.fit4bit.dto.TrainingTypImageDto;
import ch.fit4bit.entity.TrainingTyp;
import ch.fit4bit.service.TrainingTypService;

@RestController
@RequestMapping(path = "/api/trainingtyp")
@CrossOrigin(origins = "http://localhost:4200")
public class TrainingTypController {

	private TrainingTypService trainingTypService;
	private ModelMapper modelMapper;

	@Autowired
	public TrainingTypController(TrainingTypService trainingTypService, ModelMapper modelMapper) {
		this.trainingTypService = trainingTypService;
		this.modelMapper = modelMapper;
	}

	@PostMapping
	public ResponseEntity<?> create(@RequestParam(required = false, name = "file") MultipartFile file,
			@RequestParam(name = "name") String name) {
		TrainingTyp trainingTyp = new TrainingTyp();
		trainingTyp.setName(name);
		try {
			if (file != null)
				trainingTyp.setImage(file.getBytes());
		} catch (IOException e) {
			new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		trainingTypService.create(trainingTyp);
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

	@GetMapping("/image/{id}")
	public TrainingTypImageDto loadImage(@PathVariable Long id) {
		TrainingTyp t = trainingTypService.getTrainingTypById(id);
		TrainingTypImageDto trainingTypImageDto = new TrainingTypImageDto();
		trainingTypImageDto.setId(t.getId());
		trainingTypImageDto.setImage(t.getImage());
		return trainingTypImageDto;

	}

}
