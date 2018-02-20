import {TodoPage} from './todo-list.po';
import {browser, protractor} from 'protractor';

let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
browser.driver.controlFlow().execute = function () {
  let args = arguments;

  // queue 100ms wait between test
  //This delay is only put here so that you can watch the browser do its' thing.
  //If you're tired of it taking long you can remove this call
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('Todo list', () => {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  });

  it('should get and highlight Todo owner attribute ', () => {
    page.navigateTo();
    expect(page.getTodoTitle()).toEqual('Todos');
  });

  it('should type something in filter category text field and check that it returned correct element', () => {
    page.navigateTo();
    page.typeACategory("soft");
    expect(page.getUniqueTodo2("Blanche")).toEqual("Blanche");
    page.repeatBackspace(4);
    page.typeACategory("vide")
    expect(page.getUniqueTodo2("Fry")).toEqual("Fry");
  });

  it('should type something in filter body text field and check that it returned correct element', () => {
    page.navigateTo();
    page.typeABody("laborum");
    expect(page.getUniqueTodo2("Fry")).toEqual("Fry");
    page.repeatBackspace(7);
    page.typeABody("In sunt ex non tempor");
    expect(page.getUniqueTodo2("Blanche")).toEqual("Blanche");
  });

  it('should type something in filter owner text field and check that it returned correct element', () => {
    page.navigateTo();
    page.typeAOwner("Bar");
    expect(page.getUniqueTodo2("Barry")).toEqual("Barry");
    page.repeatBackspace(3);
    page.typeAOwner("Fr");
    expect(page.getUniqueTodo2("Fry")).toEqual("Fry");
  });

});

