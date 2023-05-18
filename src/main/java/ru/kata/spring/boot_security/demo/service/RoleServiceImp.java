package ru.kata.spring.boot_security.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.repositories.RoleRepository;
import ru.kata.spring.boot_security.demo.model.Role;
import java.util.List;
import java.util.Set;

@Service
public class RoleServiceImp implements RoleService {
    private final RoleRepository roleRepository;
    @Autowired
    public RoleServiceImp(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
    @Override
    public void saveRole(Role role) {
        roleRepository.save(role);
    }
    @Override
    @Transactional(readOnly = true)
    public List<Role> getAllRoles(Set<Role> roles) {
        return roleRepository.findAll();
    }
}