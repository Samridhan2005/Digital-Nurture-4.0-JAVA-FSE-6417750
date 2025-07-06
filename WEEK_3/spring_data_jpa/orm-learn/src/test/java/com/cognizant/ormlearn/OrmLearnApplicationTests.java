package com.cognizant.ormlearn;

import static org.junit.jupiter.api.Assertions.assertFalse;

import java.util.List;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class OrmLearnApplicationTests {

    @Autowired
    private CountryService countryService;

    @Test
    public void testGetAllCountries() {
        List<Country> countries = countryService.getAllCountries();
        assertFalse(countries.isEmpty(), "Country list should not be empty");
        countries.forEach(country -> {
            System.out.println(country.getCode() + " - " + country.getName());
        });
    }
}
