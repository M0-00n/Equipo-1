package com.whitelotus.WhiteLotus.service;

import com.whitelotus.WhiteLotus.exception.UserNotFoundException;
import com.whitelotus.WhiteLotus.model.User;
import com.whitelotus.WhiteLotus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> userList(){
        return userRepository.findAll();
    }


    public User createUser(User newUser){
        return userRepository.save(newUser);
    }

    public User findUserById(Long id){
        return userRepository.findById(id).orElseThrow(()-> new UserNotFoundException(id));
    }

    public User findUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public void deleteUser(Long id){
        if(userRepository.existsById(id)){
            userRepository.deleteById(id);
        }else{
            throw new UserNotFoundException(id);
        }
    }

    public User userUpdate(User user, Long id){
        return userRepository.findById(id).map(userMapping -> {
            userMapping.setName(user.getName());
            userMapping.setLastname(user.getLastname());
            userMapping.setEmail(user.getEmail());
            userMapping.setPassword(user.getPassword());
            userMapping.setPhoneNumber(user.getPhoneNumber());
            return userRepository.save(userMapping);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }
}
