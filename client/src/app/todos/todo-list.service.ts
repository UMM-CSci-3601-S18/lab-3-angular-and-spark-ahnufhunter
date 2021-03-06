import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {Todo} from './todo';
import {environment} from '../../environments/environment';

@Injectable()
export class TodoListService {
  readonly todoUrl: string = environment.API_URL + 'todos';

  constructor(private httpClient: HttpClient) {
  }

//This is the function that implements the parameters give and sorts the data.

  getTodos(sortBy?: string): Observable<Todo[]> {
    if (sortBy) {
      return this.httpClient.get<Todo[]>(this.todoUrl + "?orderBy=" + sortBy);
    }
    return this.httpClient.get<Todo[]>(this.todoUrl);
  }

  getTodoById(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(this.todoUrl + '/' + id);
  }
}
