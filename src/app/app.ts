import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SideSection } from './components/side-section/side-section'; 
import { Users } from './components/users/users';
import { DUMMY_USERS } from './dumy-users';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,SideSection, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  user = DUMMY_USERS;
  name = signal<string>("");
  selectedUserId = signal<string>("");

  onUserSelect(userId: string) {

    this.name.set(this.user.find(user => user.id === userId)?.name || "Unknown User");
    this.selectedUserId.set(userId);
    
  }
  
}
