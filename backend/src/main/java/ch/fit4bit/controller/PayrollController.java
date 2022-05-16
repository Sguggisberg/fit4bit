package ch.fit4bit.controller;

import java.util.ArrayList;
import java.util.List;

import ch.fit4bit.model.BillState;
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
    public ResponseEntity<Void> create(@RequestBody PayrollDto payrollDto) {
        payrollService.create(modelMapper.map(payrollDto, Payroll.class));
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<PayrollDto>> getAllOwnPayrolls() {
        List<PayrollDto> payrollsDto = new ArrayList();
        List<Payroll> payrolls = payrollService.findAllOwnPayrolls();

        for (Payroll payroll : payrolls) {
            payrollsDto.add(mapToDto(payroll));
        }
        return new ResponseEntity<>(payrollsDto, HttpStatus.OK);
    }

    @GetMapping("superior")
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERIOR')")
    public ResponseEntity<List<PayrollDto>> getFilteredPayroll(@RequestParam String filter) {
        List<PayrollDto> payrollsDto = new ArrayList();

        try {
            List<Payroll> payrolls = payrollService.findByState(BillState.valueOf(filter));
            for (Payroll payroll : payrolls) {
                payrollsDto.add(mapToDto(payroll));
            }
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(payrollsDto, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(payrollsDto, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(payrollsDto, HttpStatus.OK);
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

    public static PayrollDto mapToDto(Payroll payroll) {
        PayrollDto payrollDto = new PayrollDto();
        payrollDto.setId(payroll.getId());
        payrollDto.setMonth(payroll.getMonth());
        payrollDto.setYear(payroll.getYear());
        payrollDto.setBillState(payroll.getBillState());
        return payrollDto;

    }

}
