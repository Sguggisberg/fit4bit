package ch.fit4bit.service;

import java.util.*;

import ch.fit4bit.entity.Training;
import ch.fit4bit.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.PayrollRepository;
import ch.fit4bit.dto.PayrollAddTrainingDto;
import ch.fit4bit.entity.Payroll;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PayrollService {

    private final PayrollRepository payrollRepository;

    private final TrainingService trainingService;

    private final UserService userService;

    @Autowired
    public PayrollService(PayrollRepository payrollRepository, TrainingService trainingService, UserService userService) {
        this.payrollRepository = payrollRepository;
        this.trainingService = trainingService;

        this.userService = userService;
    }

    public List<Payroll> findAllOwnPayrolls() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUserName(authentication.getName());
        return payrollRepository.findAllByUser(user);
    }

    public Payroll creat(Payroll payroll) {
        return payrollRepository.save(payroll);
    }

    public Payroll addTrainings(PayrollAddTrainingDto payrollAddTrainingDto) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUserName(authentication.getName());
        Payroll payroll = payrollRepository.findByIdAndUser(payrollAddTrainingDto.getId(), user);
        List<Training> listOfTraining = new ArrayList<>();

       for(Training training: payroll.getTrainings()) {
              training.setPayroll(null);
           listOfTraining.add(training);
       }
        trainingService.saveAll(listOfTraining);
        return payrollRepository.save(payroll);

    }

    public Payroll findById(Long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUserName(authentication.getName());
        return payrollRepository.findByIdAndUser(id, user);
    }
}
