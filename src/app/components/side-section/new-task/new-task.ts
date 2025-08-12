import { Component,Output,EventEmitter,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskSchema } from '../../../Models/taskSchema';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css']
})
export class NewTask {
  @Output() taskCanceled = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<NewTaskSchema>();
  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDueDate = signal<string>('');

  onCancelClicked(){
    this.taskCanceled.emit();
  }
  onCreateTask(){
    const newTask: NewTaskSchema = {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate()
    };
    this.taskCreated.emit(newTask);
  }
    
}
