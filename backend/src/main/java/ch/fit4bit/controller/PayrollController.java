package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.fit4bit.dto.PayrollAddTrainingDto;
import ch.fit4bit.dto.PayrollDto;
import ch.fit4bit.entity.Payroll;
import ch.fit4bit.service.PayrollService;

@RestController
@RequestMapping(path = "/api/payroll")
@CrossOrigin(origins = "http://localhost:4200")
public class PayrollController {

	private ModelMapper modelMapper;
	private PayrollService payrollService;

	@Autowired
	public PayrollController(ModelMapper modelMapper, PayrollService payrollService) {
		this.modelMapper = modelMapper;
		this.payrollService = payrollService;
	}

	@PostMapping
	public ResponseEntity<?> create(@RequestBody PayrollDto payrollDto) {
		payrollService.creat(modelMapper.map(payrollDto, Payroll.class));
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping
	public List<PayrollDto> getAllOwnPayrolls() {
		List<PayrollDto> payrollsDto = new ArrayList();
		List<Payroll> payrolls = payrollService.findAllOwnPayrolls();

		for(Payroll payroll: payrolls) {
			payrollsDto.add(modelMapper.map(payroll, PayrollDto.class));
		}
		return payrollsDto;
	}
	
	@PutMapping
	public ResponseEntity<?> addTrainings(@RequestBody PayrollAddTrainingDto addTrainingDto) {
		payrollService.addTrainings(addTrainingDto);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

}
