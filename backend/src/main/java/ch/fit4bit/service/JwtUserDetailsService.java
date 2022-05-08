package ch.fit4bit.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ch.fit4bit.dao.UserRepository;
import ch.fit4bit.entity.User;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	private UserRepository userRepository;

	@Autowired
	public JwtUserDetailsService(UserRepository userRepository) {
		this.userRepository=userRepository;
	}

	@Override
	public User loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username).orElse(null);
		if(user == null) {
			throw new UsernameNotFoundException(username);
		}
		return user;
	}
}
