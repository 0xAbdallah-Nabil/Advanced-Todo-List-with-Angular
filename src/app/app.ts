import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SideSection } from './components/side-section/side-section'; 
import { Users } from './components/users/users';
import { DUMMY_USERS } from './dumy-users';
import { Login } from "./components/login/login";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideSection, Users, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  user = DUMMY_USERS;
  name = signal<string>("");
  selectedUserId = signal<string>("");
  loggedInClicked: boolean = false;

  onUserSelect(userId: string) {

    this.name.set(this.user.find(user => user.id === userId)?.name || "Unknown User");
    this.selectedUserId.set(userId);
    
  }
  
}
