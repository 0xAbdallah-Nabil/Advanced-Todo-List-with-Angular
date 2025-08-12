import { Component ,computed,Input,Output,EventEmitter} from '@angular/core';
import {User} from '../../Models/userSchema';
import { Card } from "../../shared/card/card";
@Component({
  selector: 'app-users',
  imports: [Card],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
@Input({required: true}) user!: User;
@Input({required: true}) selected!: boolean;
@Output() select = new EventEmitter<string>();
// select=output<string>();
  
  updateUser() {
    this.select.emit(this.user.id);
  }
}


//old code

/*
import { Component ,signal ,computed} from '@angular/core';
import { DUMMY_USERS } from '../../dumy-users';
let randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css'
})


// SIGNALS: are reactive primitives that hold a value and can be updated starts with angular 16 
// zone.js is the old way of managing state in Angular applications starts with angular 2
// They are used to create reactive state in Angular applications.
// COMPUTED: are derived values that automatically update when their dependencies change
export class Users {
  users = signal(DUMMY_USERS[randomIndex]);
  updateImage = computed(() => this.users().avatar);

  updateUser() {
    randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.users.set(DUMMY_USERS[randomIndex]);
  }
}

*/
