import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Todo} from './todo';
import {TodoComponent} from './todo.component';
import {TodoListService} from './todo-list.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('Todo component', () => {

  let todoComponent: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  let todoListServiceStub: {
    getTodoById: (todoId: string) => Observable<Todo>
  };

  beforeEach(() => {
    // stub UserService for test purposes
    todoListServiceStub = {
      getTodoById: (todoId: string) => Observable.of([
        {
          id: "588959850599df780df04d5d",
          owner: "Dawn",
          status: true,
          body: "Deserunt voluptate nulla minim amet in do. Adipisicing magna fugiat tempor fugiat irure aute voluptate.",
          category: "homework"
        },
        {
          id: "58895985d70c9fd167056ed7",
          owner: "Roberta",
          status: true,
          body: "Deserunt velit reprehenderit deserunt sunt excepteur sit eu eiusmod in voluptate aute minim mollit. Esse aliqua esse officia do proident non consequat non mollit.",
          category: "homework"
        },
      ].find(todo => todo.id === todoId))
    };

    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [{provide: TodoListService, useValue: todoListServiceStub}]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TodoComponent);
      todoComponent = fixture.componentInstance;
    });
  }));

  it('can retrieve Dawn by ID', () => {
    todoComponent.setId('588959850599df780df04d5d');
    expect(todoComponent.todo).toBeDefined();
    expect(todoComponent.todo.owner).toBe('Dawn');
    expect(todoComponent.todo.status).toBe(true);
    expect(todoComponent.todo.body).toBe('Deserunt voluptate nulla minim amet in do. Adipisicing magna fugiat tempor fugiat irure aute voluptate.');
    expect(todoComponent.todo.category).toBe('homework');

  });

  it('can retrieve Roberta by ID', () => {
    todoComponent.setId('58895985d70c9fd167056ed7');
    expect(todoComponent.todo).toBeDefined();
    expect(todoComponent.todo.owner).toBe('Roberta');
    expect(todoComponent.todo.status).toBe(true);
    expect(todoComponent.todo.body).toBe('Deserunt velit reprehenderit deserunt sunt excepteur sit eu eiusmod in voluptate aute minim mollit. Esse aliqua esse officia do proident non consequat non mollit.');
    expect(todoComponent.todo.category).toBe('homework');

  });

    it('returns undefined for Jesus', () => {
      todoComponent.setId('Jesus');
      expect(todoComponent.todo).not.toBeDefined();
    });

  });
