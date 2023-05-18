package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminControllerRest {
    private final UserService userService;
    @Autowired
    public AdminControllerRest(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/users")
    public ResponseEntity<List<User>> adminPage() {
        List<User> allUsers = userService.listUsers();
        return ResponseEntity.ok(allUsers);
    }
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserOne(@PathVariable Integer id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        userService.save(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PatchMapping( "/users/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user,@PathVariable Integer id) {
        userService.updateUser(user, user.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Integer id) {
        userService.delete(id);
        return new ResponseEntity<>("User id" + id + "has been deleted", HttpStatus.OK);
    }

    @GetMapping("/auth")
    public ResponseEntity<User> getAuthUser(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }
}
