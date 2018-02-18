
/*

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
    // stub TodoService for test purposes
    todoListServiceStub = {
      getTodoById: (todoId: string) => Observable.of([
        {
          id: '58895985a22c04e761776d54',
          owner : 'Blanche',
          status: false,
          body: 'In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.',
          category: 'software design'
        },
        {
          id : '58895985c1849992336c219b',
          owner : 'Fry',
          status : false,
          body : 'Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.',
          category : 'video games'
        },
        {
          id: '588959856f0b82ee93cd93eb',
          owner: 'Barry',
          status: true,
          body: 'Nisi sit non non sunt veniam pariatur. Elit reprehenderit aliqua consectetur est dolor officia et adipisicing elit officia nisi elit enim nisi.',
          category: 'video games'
        }
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
    todoComponent.setId('Blanche_id');
    expect(todoComponent.todo).toBeDefined();
    expect(todoComponent.todo.owner).toBe('Blanche');
    expect(todoComponent.todo.category).toBe('software design');
  });

  it('returns undefined for Santa', () => {
    todoComponent.setId('Santa');
    expect(todoComponent.todo).not.toBeDefined();
  });

});
*/
