import { Component ,Input,output} from '@angular/core';
import { Tasks } from "./tasks/tasks";
import { NewTask } from "./new-task/new-task";
import { NewTaskSchema } from '../../Models/taskSchema';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-side-section',
  imports: [Tasks, NewTask, Card],
  templateUrl: './side-section.html',
  styleUrl: './side-section.css'
})
export class SideSection {
  @Input({required: true}) inputName!: string;
  @Input({required: true}) id!: string;
  addButtonClicked = false;
  dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]
  get filteredTasks() {
    return this.dummyTasks.filter(task => task.userId === this.id);
  }
  onTaskComplete(id: string) {
    this.dummyTasks = this.dummyTasks.filter(task => task.id !== id);
  }
  onAddTaskButtonClicked() {
    this.addButtonClicked = true;
  }
  onTaskCreated(newTask: NewTaskSchema) {
    this.dummyTasks.push({ 
      id: new Date().getTime().toString(),
      userId: this.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });
    this.addButtonClicked = false;
  }
}
