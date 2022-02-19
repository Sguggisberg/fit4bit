package ch.fit4bit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import ch.fit4bit.main.entity.Room;
import ch.fit4bit.main.entity.Training;
import ch.fit4bit.main.entity.TrainingTyp;
import ch.fit4bit.main.entity.User;
import ch.fit4bit.service.RoomService;
import ch.fit4bit.service.TrainingService;
import ch.fit4bit.service.TrainingTypService;
import ch.fit4bit.service.UserService;

import java.time.LocalDateTime;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {

	private UserService userService;
	private TrainingTypService trainingTypService;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	private RoomService roomService;
	private TrainingService trainingService;

	@Autowired
	public CommandLineAppStartupRunner(UserService userService,TrainingTypService trainingTypService, RoomService roomService, BCryptPasswordEncoder bCryptPasswordEncoder
, TrainingService trainingService) {
		this.userService = userService;
		this.trainingTypService = trainingTypService;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		this.roomService = roomService;
		this.trainingService = trainingService;
	}

	@Override
	public void run(String...args) throws Exception {

		// User anlegen
		User user1 = new User("trainer1@bla.ch", "Stefan", "Mueller",bCryptPasswordEncoder.encode("123456"));
		User user2 = new User("superior1@bla.ch", "Stefan2", "Mueller2",bCryptPasswordEncoder.encode("123456"));
		User user3 = new User("finance1@bla.ch", "Stefan2", "Mueller2",bCryptPasswordEncoder.encode("123456"));
		User user4 = new User("trainer2@bla.ch", "Stefan", "Mueller",bCryptPasswordEncoder.encode("123456"));
		
		user1 = userService.create(user1);
		user2 = userService.create(user2);
		user3 = userService.create(user3);
		user4 = userService.create(user4);		
		
		TrainingTyp tt1 = new TrainingTyp("Yoga");
		TrainingTyp tt2 = new TrainingTyp("Pialtes");
		TrainingTyp tt3 = new TrainingTyp("Spinning");
		TrainingTyp tt4 = new TrainingTyp("BBP");
		TrainingTyp tt5 = new TrainingTyp("Zumba");
		
		tt1 = trainingTypService.create(tt1);
		tt2 = trainingTypService.create(tt2);
		tt3 = trainingTypService.create(tt3);
		tt4 = trainingTypService.create(tt4);
		tt5 = trainingTypService.create(tt5);
		
		Room r1 = new Room("blue");
		Room r2 = new Room("red");
		
		r1 = roomService.create(r1);
		r2 = roomService.create(r2);

		Training t1 = new Training(tt1, LocalDateTime.of(2022, 6, 14, 20, 0), user1, r1, 10);	
		trainingService.create(t1);
	}
}


