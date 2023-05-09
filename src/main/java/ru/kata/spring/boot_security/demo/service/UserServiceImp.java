package ru.kata.spring.boot_security.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.repositories.UserRepository;
import java.util.List;

@Service
public class UserServiceImp implements UserService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    @Autowired
    public UserServiceImp(UserRepository userRepository,@Lazy PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    @Transactional
    public void add(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
    @Transactional(readOnly = true)
    @Override
    public List<User> listUsers() {
        return userRepository.findAll();
    }
    @Transactional(readOnly = true)
    @Override
    public User getUserById(int id) {
        return userRepository.getById(id);
    }
    @Transactional
    @Override
    public void update(User updateUser) {
        updateUser.setPassword(passwordEncoder.encode(updateUser.getPassword()));
        userRepository.save(updateUser);
    }
    @Transactional
    @Override
    public void delete(int id) {
        userRepository.deleteById(id);
    }
    @Override
    @Transactional
    public void updateUser(User updateUser, int id) {
        User editUser = getUserById(id);
        editUser.setFirstName(updateUser.getFirstName());
        editUser.setEmail(updateUser.getEmail());
        editUser.setLastname(updateUser.getLastname());
        editUser.setAge(updateUser.getAge());
        editUser.setRoles(updateUser.getRoles());
        if (!updateUser.getPassword().isEmpty()) {
            editUser.setPassword(passwordEncoder.encode(updateUser.getPassword()));
        }
        userRepository.save(editUser);
    }
    @Override
    public User findUsersByEmail(String email) {
        return userRepository.findUsersByEmail(email);
    }
}
