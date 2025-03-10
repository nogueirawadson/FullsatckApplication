import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todo } from '../models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = environment.baseUrl



  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Todo[]> {
    const todos = this.http.get<Todo[]>(this.baseUrl)
    return todos;

  }

  //**  findAll(): Observable<Todo[]> {
  // return this.http.get<Todo[]>(this.baseUrl);
  // }



  findById(id: any): Promise<Todo> {
    const url = fetch(`${this.baseUrl}/${id}`).then(res => res.json())
    return url;
  }

  update(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/${todo.id}`
    return this.http.put<Todo>(url, todo);

  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}


