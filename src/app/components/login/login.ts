import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  @Output() loggedInCanceled = new EventEmitter<void>();

  cancel() {
    this.loggedInCanceled.emit();
  }
}
