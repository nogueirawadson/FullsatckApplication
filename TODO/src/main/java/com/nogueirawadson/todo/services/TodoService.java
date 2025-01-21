package com.nogueirawadson.todo.services;


import com.nogueirawadson.todo.domain.Todo;
import com.nogueirawadson.todo.repositories.TodoRepository;
import com.nogueirawadson.todo.resourceException.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public Todo findById(Integer id) {
        Optional<Todo> objeto = repository.findById(id);
        return objeto.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado Id: " + id + ", Tipo: " + Todo.class.getName()));

    }

    public List<Todo> findAlOpen() {
        List<Todo> list = repository.findAllOpen();
        return list;
    }

    public List<Todo> findAllClose() {
        List<Todo> list = repository.findAllClose();
        return list;
    }

    public List<Todo> findAll() {
        List<Todo> list = repository.findAll();
        return list;
    }

    public Todo create(Todo objeto) {
        objeto.setId(null);
        return repository.save(objeto);
    }

    public void delete(Integer id) {
        repository.deleteById(id);

    }

    public Todo update(Integer id, Todo objeto) {
        Todo newObjeto = findById(id);
        newObjeto.setTitulo(objeto.getTitulo());
        newObjeto.setDataParaFinalizar(objeto.getDataParaFinalizar());
        newObjeto.setDescricao(objeto.getDescricao());
        newObjeto.setFinalizado(objeto.isFinalizado());
        return repository.save(newObjeto);
    }
}
