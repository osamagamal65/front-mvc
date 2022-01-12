import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todos/todo.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [TodoService],
})
export class ServiceModule { }
