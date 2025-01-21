import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from '../header/header.component';
import { error } from 'console';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, MatInputModule,
    FormsModule, MatDatepickerModule,
    MatNativeDateModule, MatFormFieldModule,
    HeaderComponent, MatButtonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {


  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false,
  }

  constructor(private router: Router, private service: TodoService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
  
    this.todo.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
    this.formatDate();

  }

  update(): void {
    this.service.update(this.todo).subscribe((resposta) => {
    this.service.message('Informações atualizadas com sucesso!');
    this.router.navigate(['']);
    }, error => {
    this.service.message('Falha ao atualizar TO-DO')
    this.router.navigate([''])

    });
  
  }
  cancel(): void {
    this.router.navigate(['']);
  }

  findById(): void {
  this.service.findById(this.todo.id).then((resposta) => {
  this.todo = resposta;
  })
  }

  formatDate(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  };
}


