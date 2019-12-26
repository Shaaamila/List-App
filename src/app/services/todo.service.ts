import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
	todosLimit = '?limit'

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
  	return this.http.get<Todo[]>(this.todosUrl);
  }
}
