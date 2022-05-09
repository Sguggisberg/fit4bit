package ch.fit4bit.service;

import java.util.List;
import java.util.Optional;

import ch.fit4bit.dao.UserRepository;
import ch.fit4bit.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.TrainingRepository;
import ch.fit4bit.entity.Training;

@Service
public class TrainingService {

    private TrainingRepository trainingRepository;
    private UserRepository userRepository;

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
        System.out.println("userOpt.get " +  userOpt.get());
        if (userOpt.isPresent()) {
            return this.trainingRepository.findByUser(userOpt.get());
        }
        return null;
    }

    public Training findTrainingById(Long id) {
        return trainingRepository.findById(id).get(); // Todo: Throw if not found

    }

    public Training patch(Training training) {
        return trainingRepository.save(training);
    }

}
