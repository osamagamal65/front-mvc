import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Todo } from '../../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  listObservable$: BehaviorSubject<Todo[]> = new BehaviorSubject([...this.list]);

  constructor() {
    this.listObservable$.next(this.list);
  }

  /**
   * gets the list of To-dos from the store
   * * returns a list of Todo
   */
  get list(): Todo[] { return JSON.parse(localStorage.getItem('toDos') ?? "[]"); }

  addNew(newTodo: Todo) {
    const newList = [...this.listObservable$.value, { ...newTodo, id: this.listObservable$.value.length }];
    this.listObservable$.next(newList);
    this.saveLocally();


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.saveLocally();
  }

  toggleItem(todo: Todo) {
    const list = this.listObservable$.value;
    let indexOfItem = this.listObservable$.value.findIndex((a) => a.id == todo.id);
    list[indexOfItem] = todo;
    this.listObservable$.next(list);
    this.saveLocally();

  }

  saveLocally() {
    localStorage.setItem('toDos', JSON.stringify(this.listObservable$.value));
  }
}
