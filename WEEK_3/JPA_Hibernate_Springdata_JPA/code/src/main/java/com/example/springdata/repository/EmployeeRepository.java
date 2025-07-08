package com.example.springdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springdata.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
