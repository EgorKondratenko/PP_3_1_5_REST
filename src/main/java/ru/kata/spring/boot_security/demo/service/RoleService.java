package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.model.Role;
import java.util.List;
import java.util.Set;

public interface RoleService {
    void saveRole(Role role);
    List<Role> getAllRoles(Set<Role> roles);
}
