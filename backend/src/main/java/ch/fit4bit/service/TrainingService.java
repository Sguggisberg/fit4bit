package ch.fit4bit.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import ch.fit4bit.dao.UserRepository;
import ch.fit4bit.entity.Payroll;
import ch.fit4bit.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.TrainingRepository;
import ch.fit4bit.entity.Training;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TrainingService {

    private final TrainingRepository trainingRepository;
    private final UserRepository userRepository;

    @Autowired
    public TrainingService(TrainingRepository trainingRepository, UserRepository userRepository) {
        this.trainingRepository = trainingRepository;
        this.userRepository = userRepository;
    }

    public Training create(Training training) {
        return trainingRepository.save(training);
    }

    public List<Training> getAllTraining() {
        return this.trainingRepository.findAll();
    }

    public List<Training> getAllTrainingByUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Optional<User> userOpt = userRepository.findByUsername(authentication.getName());
        if (userOpt.isPresent()) {
            return this.trainingRepository.findByUser(userOpt.get());
        }
        return Collections.emptyList();
    }

    public Training findTrainingById(Long id) {
        return trainingRepository.findById(id).get(); // Todo: Throw if not found

    }

    public Training patch(Training training) {
        return trainingRepository.save(training);
    }

    public List<Training> findTrainingInPayroll(Payroll payroll){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Optional<User> userOpt = userRepository.findByUsername(authentication.getName());

        if (userOpt.isPresent()) {
            return trainingRepository.findByUserAndPayroll(userOpt.get(), payroll);
        }
        return Collections.emptyList();
    }

    public List<Training> findOpenPayrolls() {
        List<Training> list = getAllTrainingByUser();
        return list.stream().filter(training -> training.getPayroll()==null).collect(Collectors.toList());
    }

    public List<Training> saveAll(List<Training> trainings) {
        return trainingRepository.saveAll(trainings);
    }

}
