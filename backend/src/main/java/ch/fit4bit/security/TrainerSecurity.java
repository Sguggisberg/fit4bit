package ch.fit4bit.security;

import ch.fit4bit.service.RoomService;
import ch.fit4bit.service.TrainingService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class TrainerSecurity {

    private TrainingService trainingService;

    @Autowired
    public TrainerSecurity(TrainingService trainingService) {
        this.trainingService = trainingService;
    }
    public boolean isOwner(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return true;
    }

}
