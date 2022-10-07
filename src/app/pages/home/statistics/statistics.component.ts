import { Component, OnInit } from '@angular/core';
import { IconDefinition, faUsers, faChartPie, faUserGroup, faUserSecret, faArrowsSpin, faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  faUsers: IconDefinition;
  faChartPie: IconDefinition;
  faUserSecret: IconDefinition;
  faArrowsSpin: IconDefinition;
  faEllipsis:IconDefinition
  leads: number;
  totalLeads: number;
  totalHotLeads: number;
  totalFollowUpdates: number;

  constructor() {
    this.faUsers = faUserGroup;
    this.faChartPie = faChartPie;
    this.faUserSecret = faUserSecret;
    this.faArrowsSpin= faArrowsSpin;
    this.faEllipsis = faEllipsis
    this.leads = 8967;
    this.totalLeads = 1967;
    this.totalHotLeads = 647;
    this.totalFollowUpdates = 151;

  }

  ngOnInit(): void {
  }

}
