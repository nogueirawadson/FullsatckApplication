import { Component, OnInit } from '@angular/core';
import { MatButtonModule, } from '@angular/material/button';



import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-read-all',
  standalone: true,
  imports: [MatCardModule, MatIconModule,
   MatButtonModule, CommonModule, MatBadgeModule,
   MatSnackBarModule,RouterLink,],

  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.css'
})
export class ReadAllComponent implements OnInit {

  closed = 0;
  list: Todo[] = [];
  listFinished: Todo[] = [];



  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }


  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.filter(todo => {
        if (todo.finalizado) {
          this.listFinished.push(todo);
        } else {
          this.list.push(todo)
        }
      

      })
      this.closed = this.listFinished.length
    });

  }

  finalizar(item: Todo): void {
  item.finalizado = true;
  this.service.update(item).subscribe(() => {
   this.service.message('Task Finalizada com sucesso!');
        this.list = this.list.filter(todo => todo.id !== item.id);
        this.closed++;
  })
  }

  delete(id: any): void {
    this.service.delete(id).subscribe((resposta) => {
      if (resposta === null) {
        this.service.message('Task Deletada com sucesso!');
        this.list = this.list.filter(todo => todo.id !== id);

      }
    })
  }

  navegarParaFinalizados(): void{
  this.router.navigate(['finalizados']);
  }

}
