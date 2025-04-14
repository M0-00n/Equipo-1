package com.whitelotus.WhiteLotus.controller;

import com.whitelotus.WhiteLotus.exception.UserNotFoundException;
import com.whitelotus.WhiteLotus.model.User;
import com.whitelotus.WhiteLotus.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.userList();
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getById(@PathVariable Long id){
        try {
            return ResponseEntity.ok(userService.findUserById(id));
        }catch (UserNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User newUser){
        if(userService.findUserByEmail(newUser.getEmail()) != null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(newUser));
    }

//    @PostMapping
//    public ResponseEntity<User> createUser(@RequestBody User newUser){
//        if(userService.findUserByEmail(newUser.getEmail()) != null){
//            return new ResponseEntity<>(HttpStatus.CONFLICT);
//        }
//        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(
//                newUser.getName(),
//                newUser.getLastname(),
//                newUser.getEmail(),
//                newUser.getPassword(),
//                newUser.getPhoneNumber()));
//    }

    @DeleteMapping("/delete_user/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Long id){
        try {
            userService.deleteUser(id);
            return ResponseEntity.noContent().build();
        }catch (UserNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update_user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user){
        try {
            return ResponseEntity.ok(userService.userUpdate(user, id));
        }catch (UserNotFoundException e){
            return ResponseEntity.notFound()
                    .build();        }
    }



}//CLASS
