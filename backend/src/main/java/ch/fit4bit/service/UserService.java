package ch.fit4bit.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ch.fit4bit.dao.UserRepository;
import ch.fit4bit.main.entity.User;

@Service
@Transactional
public class UserService {

	
	private UserRepository userRepository;
	
	@Autowired
	UserService(UserRepository userRepository){
		this.userRepository = userRepository;
	}
		
	public User create(User user) {
		return userRepository.save(user);
	}
}
