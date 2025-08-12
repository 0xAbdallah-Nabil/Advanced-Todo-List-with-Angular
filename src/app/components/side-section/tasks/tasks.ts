import { Component ,Input ,Output,EventEmitter} from '@angular/core';
import {TasksSchema} from '../../../Models/taskSchema';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [DatePipe]
})
export class Tasks {
  @Input({ required: true }) task!: TasksSchema;
  @Output() Complete = new EventEmitter<string>();
  onComplete() {
    this.Complete.emit(this.task.id);
  }
}
