package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import ch.fit4bit.dto.PayrollDto;
import ch.fit4bit.dto.RoomDto;
import ch.fit4bit.dto.TrainingTypDTO;
import ch.fit4bit.entity.Payroll;
import ch.fit4bit.entity.User;
import ch.fit4bit.service.PayrollService;
import ch.fit4bit.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

    private final TrainingService trainingService;
    private final ModelMapper modelMapper;

    private final UserService userService;

    private final PayrollService payrollService;


    @Autowired
    public TrainingController(TrainingService trainingService, ModelMapper modelMapper, UserService userService, PayrollService payrollService) {
        this.trainingService = trainingService;
        this.modelMapper = modelMapper;
        this.userService = userService;
        this.payrollService = payrollService;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody TrainingDTO trainingDto) {
        trainingService.create(modelMapper.map(trainingDto, Training.class));
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<TrainingDTO>> getAll() {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
        List<Training> allTrainings = trainingService.getAllTraining();
        List<TrainingDTO> allTrainingsDto = new ArrayList<>();
        for (Training training : allTrainings) {
            allTrainingsDto.add(modelMapper.map(training, TrainingDTO.class));
        }
        return new ResponseEntity<>(allTrainingsDto, HttpStatus.OK);
    }

    @GetMapping("/trainer")
    public ResponseEntity<List<TrainingDTO>> getAllByTrainer() {
        List<Training> allTrainings = trainingService.getAllTrainingByUser();
        List<TrainingDTO> allTrainingsDto = new ArrayList<>();

        for (Training training : allTrainings) {
            allTrainingsDto.add(map(training));
        }
        return new ResponseEntity<>(allTrainingsDto, HttpStatus.OK);
    }

    @GetMapping("/allpayroll/")
    public ResponseEntity<List<TrainingDTO>> getAllByTrainerAndOpenPayroll() {
        List<Training> allTrainings = trainingService.findOpenPayrolls();
        List<TrainingDTO> allTrainingsDto = new ArrayList<>();

        for (Training training : allTrainings) {
            allTrainingsDto.add(map(training));
        }
        return new ResponseEntity<>(allTrainingsDto, HttpStatus.OK);
    }

    @GetMapping("/payroll/{id}")
    public ResponseEntity<List<TrainingDTO>> getAllByTrainerAndPayroll(@PathVariable String id) {
        Payroll payroll = payrollService.findById(Long.parseLong(id));
        List<Training> allTrainings = trainingService.findTrainingInPayroll(payroll);
        List<TrainingDTO> allTrainingsDto = new ArrayList<>();

        for (Training training : allTrainings) {
            allTrainingsDto.add(map(training));
        }
        return new ResponseEntity<>(allTrainingsDto, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    @PreAuthorize("@trainerSecurity.isOwner() || hasAnyAuthority('ROLE_SUPERIOR')")
    public ResponseEntity<TrainingDTO> findById(@PathVariable Long id) {
        Training t = trainingService.findTrainingById(id);
        return new ResponseEntity<>(modelMapper.map(t, TrainingDTO.class), HttpStatus.OK);
    }

    @PutMapping
    @PreAuthorize("@trainerSecurity.isOwner()")
    public ResponseEntity<?> patch(@RequestBody TrainingDTO trainingDto) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUserName(authentication.getName());
        Training t = trainingService.findTrainingById(trainingDto.getId());
        if (!Objects.equals(user.getId(), t.getUser().getId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        t.setAmountOfCustomer(trainingDto.getAmountOfCustomer());
        trainingService.patch(t);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    private static TrainingDTO map(Training training) {
        TrainingDTO trainingDTO = new TrainingDTO();
        trainingDTO.setId(training.getId());

        trainingDTO.setId(training.getId());
        trainingDTO.setDuration(training.getDuration());
        trainingDTO.setAmountOfCustomer(training.getAmountOfCustomer());
        trainingDTO.setRunningDate(training.getRunningDate());
        TrainingTypDTO trainingTypDTO = new TrainingTypDTO();
        trainingTypDTO.setId(training.getTrainingTyp().getId());
        trainingTypDTO.setName(training.getTrainingTyp().getName());

        if (training.getRoom() != null) {
            RoomDto roomDto = new RoomDto();
            roomDto.setId(training.getRoom().getId());
            roomDto.setName(training.getRoom().getName());
            trainingDTO.setRoomDto(roomDto);
        }

        trainingDTO.setTrainingTypDTO(trainingTypDTO);

        if (training.getPayroll() != null) {
            PayrollDto payrollDto = new PayrollDto();
            payrollDto.setId(training.getPayroll().getId());
            trainingDTO.setPayrollDto(payrollDto);
        }
        return trainingDTO;
    }
}
