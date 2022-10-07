import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActivitesComponent } from './main-activites.component';

describe('MainActivitesComponent', () => {
  let component: MainActivitesComponent;
  let fixture: ComponentFixture<MainActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainActivitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
