import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
/*import {FormsModule} from '@angular/forms';*/
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import {CustomModule} from '../custom.module';

import {Todo} from './todo';
import {TodoListComponent} from './todo-list.component';
import {TodoListService} from './todo-list.service';

describe('Todo list', () => {

  let todoList: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  let todoListServiceStub: {
    getTodos: () => Observable<Todo[]>
  };

  beforeEach(() => {
    // stub TodoService for test purposes
    todoListServiceStub = {
      getTodos: () => Observable.of([
        {
          id: '58895985170cd3b13cfafeec',
          owner: 'Workman',
          status: false,
          body: 'Ea adipisicing amet exercitation excepteur ea reprehenderit nulla reprehenderit eiusmod commodo occaecat. Velit dolor enim Lorem et irure cupidatat ex pariatur non.',
          category: 'homework'
        },
        {
          id: '5889598502be34bcf1e1a333',
          owner: 'Barry',
          status: false,
          body: 'Consectetur aute enim ullamco fugiat est. Eu dolore fugiat mollit sit ut laborum labore est.',
          category: 'homework'
        },
        {
          id: '58895985921f087bb21de23e',
          owner: 'Dawn',
          status: true,
          body: 'Sunt exercitation culpa non ad exercitation quis excepteur cupidatat occaecat eiusmod. Aliquip aute anim fugiat elit ad ad cillum dolore qui dolore do commodo culpa velit.',
          category: 'groceries'
        }
      ])
    };

    TestBed.configureTestingModule({
      imports: [CustomModule],
      declarations: [TodoListComponent],
      // providers:    [ TodoListService ]  // NO! Don't provide the real service!
      // Provide a test-double instead
      providers: [{provide: TodoListService, useValue: todoListServiceStub},
        {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}]

    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TodoListComponent);
      todoList = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('contains all the todos', () => {
    expect(todoList.todos.length).toBe(3);
  });

  it('contains a todo owner \'Workman\'', () => {
    expect(todoList.todos.some((todo: Todo) => todo.owner === 'Workman')).toBe(true);
  });

  it('contain a todo owner \'Barry\'', () => {
    expect(todoList.todos.some((todo: Todo) => todo.owner === 'Barry')).toBe(true);
  });

  it('doesn\'t contain a todo owner \'Jesus\'', () => {
    expect(todoList.todos.some((todo: Todo) => todo.owner === 'Jesus')).toBe(false);
  });
});

  /*

  MORE TESTS WE WILL WORK ON LATER IF WE HAVE TIME. THESE TESTS ARE KIND OF BASED ON THE TEST
  ON THE User-list.component.spec.ts FILE.

  it('todo list filters by status', () => {
    expect(todoList.filteredTodos.booleanValue).toBe(3);
    todoList.todoStatus = 37;
    const a: Observable<Todo[]> = todoList.refreshTodos();
    a.do(x => Observable.of(x))
      .subscribe(x => expect(todoList.filteredTodos.length).toBe(2));
  });

  it('todo list filters by owner and status', () => {
    expect(todoList.filteredTodos.length).toBe(3);
    todoList.todoAge = 37;
    todoList.todoName = 'i';
    const a: Observable<Todo[]> = todoList.refreshTodos();
    a.do(x => Observable.of(x))
      .subscribe(x => expect(todoList.filteredTodos.length).toBe(1));
  });

});

describe('Misbehaving Todo List', () => {
  let todoList: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  let todoListServiceStub: {
    getTodos: () => Observable<Todo[]>
  };

  beforeEach(() => {
    // stub TodoService for test purposes
    todoListServiceStub = {
      getTodos: () => Observable.create(observer => {
        observer.error('Error-prone observable');
      })
    };

    TestBed.configureTestingModule({
      imports: [FormsModule, CustomModule],
      declarations: [TodoListComponent],
      providers: [{provide: TodoListService, useValue: todoListServiceStub},
        {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TodoListComponent);
      todoList = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('generates an error if we don\'t set up a TodoListService', () => {
    // Since the observer throws an error, we don't expect todos to be defined.
    expect(todoList.todos).toBeUndefined();
  });
});

*/
