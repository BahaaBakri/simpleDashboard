import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';
  isSideMenuOpened: boolean = false
  faCoffee = faCoffee
  onSideMenuToggled(isSideMenuOpened: boolean) {
    console.log(isSideMenuOpened);

    this.isSideMenuOpened = isSideMenuOpened
  }
}
