package com.nogueirawadson.todo.configuration;


import com.nogueirawadson.todo.services.DBservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.text.ParseException;


@Configuration
@Profile("test")
public class TestConfig {

    @Autowired
    private DBservice dBservice;

    @Bean
    public boolean instancia() throws ParseException {
        this.dBservice.InstaciaBaseDeDados();
        return true;
    }
}
