package com.whitelotus.WhiteLotus.service;

import com.whitelotus.WhiteLotus.exception.UserNotFoundException;
import com.whitelotus.WhiteLotus.model.User;
import com.whitelotus.WhiteLotus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; //Despues de agregar la interfaz en config, inyecta el encoder

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> userList(){
        return userRepository.findAll();
    }


    //----------Cambia  createUser para encriptar la contraseña ------------
    //----CREATE USER ANTERIOR----
//    public User createUser(User newUser){
//        return userRepository.save(newUser);
//    }
    //----CREATE USER PARA ENCRIPTAR----
    public User createUser(User newUser){
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword())); //Ahora cuando un usuario se registre, su contraseña será encriptada en la base de datos
        return userRepository.save(newUser);
    }

    //-----AGERGAR VALIDATE PASSWORD ----
    public boolean validatePassword(String rawPassword, String encodedPassword){
        return passwordEncoder.matches(rawPassword, encodedPassword);
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
