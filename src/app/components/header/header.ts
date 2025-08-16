import { Component, Output ,EventEmitter} from '@angular/core';
import { RouterLink } from '@angular/router'; 
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() loggedInClicked = new EventEmitter<boolean>();
  loggedInClickedCheck: boolean = false;

  Login() {
    this.loggedInClickedCheck = true;
    this.loggedInClicked.emit(this.loggedInClickedCheck);
  }
}
