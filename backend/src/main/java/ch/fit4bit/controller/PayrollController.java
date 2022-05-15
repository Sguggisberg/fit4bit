package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
        payrollService.create(modelMapper.map(payrollDto, Payroll.class));
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public List<PayrollDto> getAllOwnPayrolls() {
        List<PayrollDto> payrollsDto = new ArrayList();
        List<Payroll> payrolls = payrollService.findAllOwnPayrolls();

        for (Payroll payroll : payrolls) {
            PayrollDto payrollDto = new PayrollDto();
            payrollDto.setId(payroll.getId());
            payrollDto.setMonth(payroll.getMonth());
            payrollDto.setYear(payroll.getYear());
            payrollDto.setBillState(payroll.getBillState());
            payrollsDto.add(payrollDto);
        }
        return payrollsDto;
    }

    @PutMapping
    public ResponseEntity<?> addTrainings(@RequestBody PayrollAddTrainingDto payrollAddTrainingDto) {
        payrollService.addTrainings(payrollAddTrainingDto);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/submit/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_TRAINER')")
    public ResponseEntity<?> submit(@PathVariable Long id) {
        payrollService.submit(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}
