import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todos/todo.service';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  toDos!: Todo[];
  constructor(public service: TodoService) {

  }

  ngOnInit(): void {
  }

  toggleItem(todo: Todo, checked: boolean) {

    this.service.toggleItem({ ...todo, status: checked ? 'done' : 'todo' });
  }

}
