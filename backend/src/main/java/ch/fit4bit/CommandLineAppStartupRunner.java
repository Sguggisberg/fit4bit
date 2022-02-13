package ch.fit4bit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import ch.fit4bit.main.entity.User;
import ch.fit4bit.service.UserService;

import java.time.LocalDateTime;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {

	private UserService userService;
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	public CommandLineAppStartupRunner(UserService userService, BCryptPasswordEncoder bCryptPasswordEncoder
) {
		this.userService = userService;
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

		
	
	}
}
