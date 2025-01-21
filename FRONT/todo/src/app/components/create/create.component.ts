import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, HeaderComponent, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {


  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false,
  }

  constructor(private router: Router, private service: TodoService) {
  }
  ngOnInit(): void {
  this.formatDate();

  }

  create(): void {
    this.formatDate();
    this.service.create(this.todo).subscribe((resposta) => {
      this.service.message('To-do criado com sucesso!');
      this.router.navigate(['']);

    }, err => {
      this.service.message('Falha ao criar TO-DO!');
      this.router.navigate(['']);
    });

  };

  cancel(): void {
    this.router.navigate(['']);
  }

  formatDate(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  };
}
