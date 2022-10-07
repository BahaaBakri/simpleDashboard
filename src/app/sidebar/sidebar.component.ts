import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faChevronRight, faChevronLeft, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import {NavItem, navItems} from '../models/nav-items'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output('sideMenuToggled') sideMenuToggled = new EventEmitter()
  items:NavItem[];
  faChevronRight: IconDefinition;
  faChevronLeft: IconDefinition;
  isOpened:boolean = false;
  selectedItem:NavItem | undefined;
  constructor(private router:Router, private route:ActivatedRoute) {
    this.items = navItems;
    this.selectedItem = navItems.find(el => el.id === 1)
    this.faChevronRight = faChevronRight;
    this.faChevronLeft = faChevronLeft
   }

  ngOnInit(): void {
  }
  onNavigate(item:NavItem) {
    console.log(item.url);
    this.selectedItem = item
    this.router.navigate([item.url], {relativeTo: this.route})
  }
  toggleSideMenu() {
    this.isOpened = !this.isOpened
    this.sideMenuToggled.emit(this.isOpened)
  }

}
