package com.nogueirawadson.todo.services;

import com.nogueirawadson.todo.domain.Todo;
import com.nogueirawadson.todo.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

@CrossOrigin(origins = "http://localhost:4200")
@Service
public class DBservice {

    @Autowired
    private TodoRepository todoRepository;

    public void InstaciaBaseDeDados() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        Todo t1 = new Todo(null,
                "Estudar",
                "Estudar Spring Boot e Angular 11",
                sdf.parse("01/01/2025"),
                true);
        Todo t2 = new Todo(null,
                "Estudar",
                "Estudar Spring Boot",
                sdf.parse("03/01/2025"),
                true);
        Todo t3 = new Todo(null,
                "Estudar",
                "Estudar Angular 11",
                sdf.parse("10/01/2025"),
                false);
        Todo t4 = new Todo(null,
                "Estudar",
                "Estudar Java 11",
                sdf.parse("04/01/2025"),
                false);
        Todo t5 = new Todo(null,
                "Estudar",
                "Estudar ",
                sdf.parse("05/01/2025"),
                false);

        todoRepository.saveAll(Arrays.asList(t1, t2, t3, t4, t5));

    }


}
