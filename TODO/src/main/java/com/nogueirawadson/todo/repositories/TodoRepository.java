package com.nogueirawadson.todo.repositories;

import com.nogueirawadson.todo.domain.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {

    @Query("SELECT objeto FROM Todo objeto WHERE objeto.finalizado = false ORDER BY objeto.dataParaFinalizar")
    List<Todo> findAllOpen();

    @Query("SELECT objeto FROM Todo objeto WHERE objeto.finalizado = true ORDER BY objeto.dataParaFinalizar ")
    List<Todo> findAllClose();
}
