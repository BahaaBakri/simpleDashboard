import { Component, OnInit } from '@angular/core';
import { IconDefinition, faCalendar, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faCalender: IconDefinition;
  faBell: IconDefinition;
  constructor() { 
    this.faCalender = faCalendar;
    this.faBell = faBell
  }

  ngOnInit(): void {
  }

}
