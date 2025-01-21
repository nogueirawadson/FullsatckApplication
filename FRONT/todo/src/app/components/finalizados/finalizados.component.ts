import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-finalizados',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatToolbarModule, MatBadgeModule, HeaderComponent],
  templateUrl: './finalizados.component.html',
  styleUrl: './finalizados.component.css'
})
export class FinalizadosComponent implements OnInit {


  listFinished: Todo[] = [];



  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();

  }


  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      resposta.filter(todo => {
        if (todo.finalizado) {
          this.listFinished.push(todo);
        }
        

      })
    })
  }

  voltar(): void {
    this.router.navigate([''])

  }
}


