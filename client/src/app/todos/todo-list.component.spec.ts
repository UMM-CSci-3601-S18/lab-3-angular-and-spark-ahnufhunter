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
          id: "58895985a22c04e761776d54",
          owner: "Blanche",
          status: 'false',
          body: "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
          category: "software design"
        },
        {
          id: "58895985c1849992336c219b",
          owner: "Fry",
          status: 'false',
          body: "Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.",
          category: "video games"
        },
        {
          id: "58895985847a6c1445ec4048",
          owner: "Barry",
          status: 'true',
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

  it('can retrieve Blanche by ID', () => {
    todoComponent.setId('Blanche');
    expect(todoComponent.todo).toBeDefined();
    expect(todoComponent.todo.owner).toBe('Blanche');
    expect(todoComponent.todo.status).toBe('false');
    expect(todoComponent.todo.body).toBe('In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.');
    expect(todoComponent.todo.category).toBe('software design');

  });

  it('can retrieve Fry by ID', () => {
    todoComponent.setId('58895985c1849992336c219b');
    expect(todoComponent.todo).toBeDefined();
    expect(todoComponent.todo.owner).toBe('Fry');
    expect(todoComponent.todo.status).toBe('false');
    expect(todoComponent.todo.body).toBe('Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.');
    expect(todoComponent.todo.category).toBe('video games');

  });

  it('can retrieve Barry by ID', () => {
    todoComponent.setId('58895985847a6c1445ec4048');
    expect(todoComponent.todo).toBeDefined();
    expect(todoComponent.todo.owner).toBe('Barry');
    expect(todoComponent.todo.status).toBe('true');
    expect(todoComponent.todo.body).toBe('Deserunt velit reprehenderit deserunt sunt excepteur sit eu eiusmod in voluptate aute minim mollit. Esse aliqua esse officia do proident non consequat non mollit..');
    expect(todoComponent.todo.category).toBe('homework');

    it('returns undefined for Jesus', () => {
      todoComponent.setId('Jesus');
      expect(todoComponent.todo).not.toBeDefined();
    });

  });
});
