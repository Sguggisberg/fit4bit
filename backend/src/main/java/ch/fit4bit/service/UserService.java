package ch.fit4bit.service;

import java.util.List;
import java.util.Optional;

import ch.fit4bit.exception.ElementAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ch.fit4bit.dao.UserRepository;
import ch.fit4bit.entity.User;

@Service
@Transactional
public class UserService {
    private UserRepository userRepository;

    @Autowired
    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(User user) throws ElementAlreadyExistException {
        Optional<User> existingUserOpt = userRepository.findByUsername(user.getUsername());
        if (existingUserOpt.isPresent()) {
            throw new ElementAlreadyExistException("User already exist");
        }

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User findByUserName(String name)  {
        Optional<User> user = userRepository.findByUsername(name);
        if (user.isEmpty())
            return null;
        else return user.get();
    }
}
