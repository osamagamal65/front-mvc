import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo';
import { TodoService } from '../../services/todos/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newTodo: Todo = { id: 0, title: '', description: "", createDate: Date(), status: 'todo' };
  constructor(public service: TodoService) { }

  ngOnInit(): void {

  }

  addNew() {
    let list = this.service.addNew(this.newTodo);
    this.newTodo = { id: 0, title: '', description: "", createDate: Date(), status: 'todo' };
  }


}
