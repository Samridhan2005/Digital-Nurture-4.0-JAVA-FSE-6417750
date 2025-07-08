package com.example.springdata;

import com.example.springdata.model.Employee;
import com.example.springdata.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class SpringDataJpaApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaApplication.class, args);
    }

    @Override
    public void run(String... args) {
        Employee employee = new Employee();
        employee.setId(1);
        employee.setName("John Doe");
        employee.setDepartment("Engineering");
        employeeService.addEmployee(employee);
        System.out.println("Employee added: " + employee);
    }
}