import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommunicationsComponent } from './main-communications.component';

describe('MainCommunicationsComponent', () => {
  let component: MainCommunicationsComponent;
  let fixture: ComponentFixture<MainCommunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCommunicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
