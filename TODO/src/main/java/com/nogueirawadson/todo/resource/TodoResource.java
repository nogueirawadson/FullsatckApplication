package com.nogueirawadson.todo.resource;


import com.nogueirawadson.todo.domain.Todo;
import com.nogueirawadson.todo.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/todos")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

    @Autowired
    private TodoService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Todo> findById(@PathVariable Integer id) {
            Todo objeto = service.findById(id);
            return ResponseEntity.ok().body(objeto);
        }

        @GetMapping(value = "/open")
        public ResponseEntity<List<Todo>> listOpen() {
        List<Todo> list = service.findAlOpen();
            return ResponseEntity.ok().body(list);
        }

        @GetMapping(value = "/close")
        public ResponseEntity<List<Todo>> listClose() {
            List<Todo> list = service.findAllClose();
            return ResponseEntity.ok().body(list);

        }
        @GetMapping
        public ResponseEntity<List<Todo>> listAll() {
        List<Todo> list = service.findAll();
        return ResponseEntity.ok().body(list);

            }

            @PostMapping
            public ResponseEntity<Todo> create(@RequestBody Todo objeto ){
              objeto  = service.create(objeto);
                URI uri = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(objeto.getId())
                        .toUri();
                return  ResponseEntity.created(uri).build();
            }

            @DeleteMapping(value = "/{id}")
            public ResponseEntity<Void> delete(@PathVariable Integer id) {
            service.delete(id);
            return  ResponseEntity.noContent().build();

            }
        @PutMapping(value = "/{id}")
        public ResponseEntity<Todo> update(@PathVariable Integer id, @RequestBody Todo objeto){
        Todo newObjeto = service.update(id, objeto);
        return ResponseEntity.ok().body(newObjeto);

        }

    }


