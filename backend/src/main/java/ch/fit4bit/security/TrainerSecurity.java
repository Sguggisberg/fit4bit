package ch.fit4bit.security;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class TrainerSecurity {

    @Autowired
    public TrainerSecurity() {
    }
    public boolean isOwner(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return true;
    }

}
