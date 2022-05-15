package ch.fit4bit.service;

import java.util.*;

import ch.fit4bit.entity.Training;
import ch.fit4bit.entity.User;
import ch.fit4bit.model.BillState;
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

    public Payroll create(Payroll payroll) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUserName(authentication.getName());
        payroll.setUser(user);
        payroll.setBillState(BillState.OFFEN);
        return payrollRepository.save(payroll);
    }

    public void addTrainings(PayrollAddTrainingDto payrollAddTrainingDto) {
        Payroll payroll = findById(payrollAddTrainingDto.getId());
        List<Training> listOfOldTrainings = new ArrayList<>();
        List<Training> listOfNewTrainings = new ArrayList<>();

        // Delete old records of training
        if (listOfOldTrainings.size() > 0) {
            for (Training training : payroll.getTrainings()) {
                training.setPayroll(null);
                listOfOldTrainings.add(training);
            }
        }

        // Add new Training
        for (Long id : payrollAddTrainingDto.getTrainingIds()) {
            Training training = trainingService.findTrainingById(id);
            training.setPayroll(payroll);
            listOfNewTrainings.add(training);
        }

        trainingService.saveAll(listOfOldTrainings);
        trainingService.saveAll(listOfNewTrainings);
    }

    public Payroll findById(Long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUserName(authentication.getName());
        return payrollRepository.findByIdAndUser(id, user);
    }

    public void submit(Long id) {
        Payroll payroll = findById(id);
        payroll.setBillState(BillState.WARTE_BEI_SUPERIOR);
        payrollRepository.save(payroll);
    }
}
