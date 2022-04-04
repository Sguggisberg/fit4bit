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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ch.fit4bit.main.dto.TrainingTypDTO;
import ch.fit4bit.main.entity.TrainingTyp;
import ch.fit4bit.service.TrainingTypService;
import ch.fit4bit.utils.ImageUtils;

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

	@PostMapping("/image")
	public ResponseEntity<?> uoloadFile(@RequestParam("file") MultipartFile file, @RequestParam("id") Long id) {
		TrainingTyp t = trainingTypService.getTrainingTypById(id);
		try {
			t.setImage(ImageUtils.compressBytes(file.getBytes()));
		} catch (IOException e) {
			new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		trainingTypService.save(t);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

}
