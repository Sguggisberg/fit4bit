package ch.fit4bit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import ch.fit4bit.main.entity.TrainingTyp;
import ch.fit4bit.main.entity.User;
import ch.fit4bit.service.TrainingTypService;
import ch.fit4bit.service.UserService;

import java.time.LocalDateTime;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {

	private UserService userService;
	private TrainingTypService trainingTypService;
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	public CommandLineAppStartupRunner(UserService userService,TrainingTypService trainingTypService, BCryptPasswordEncoder bCryptPasswordEncoder
) {
		this.userService = userService;
		this.trainingTypService = trainingTypService;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	
	}

	@Override
	public void run(String...args) throws Exception {

		// User anlegen
		User user1 = new User("trainer1@bla.ch", "Stefan", "Mueller",bCryptPasswordEncoder.encode("123456"));
		User user2 = new User("superior1@bla.ch", "Stefan2", "Mueller2",bCryptPasswordEncoder.encode("123456"));
		User user3 = new User("finance1@bla.ch", "Stefan2", "Mueller2",bCryptPasswordEncoder.encode("123456"));
		User user4 = new User("trainer2@bla.ch", "Stefan", "Mueller",bCryptPasswordEncoder.encode("123456"));


		
		userService.create(user1);
		userService.create(user2);
		userService.create(user3);
		userService.create(user4);		
		
		TrainingTyp tt1 = new TrainingTyp("Yoga");
		TrainingTyp tt2 = new TrainingTyp("Pialtes");
		TrainingTyp tt3 = new TrainingTyp("Spinning");
		TrainingTyp tt4 = new TrainingTyp("BBP");
		TrainingTyp tt5 = new TrainingTyp("Zumba");
		
		trainingTypService.create(tt1);
		trainingTypService.create(tt2);
		trainingTypService.create(tt3);
		trainingTypService.create(tt4);
		trainingTypService.create(tt5);
		
		

		
	
	}
}
