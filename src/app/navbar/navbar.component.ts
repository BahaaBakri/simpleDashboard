import { Component, OnInit } from '@angular/core';
import { IconDefinition, faCalendar, faBell } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faCalender: IconDefinition;
  faBell: IconDefinition;
  navbarBackground: string | undefined;
  constructor() { 
    this.faCalender = faCalendar;
    this.faBell = faBell
  }

  ngOnInit(): void {
    this.navbarBackground = environment.navbarBackground
  }

}
