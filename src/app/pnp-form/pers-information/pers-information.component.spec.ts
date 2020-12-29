import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersInformationComponent } from './pers-information.component';

describe('PersInformationComponent', () => {
  let component: PersInformationComponent;
  let fixture: ComponentFixture<PersInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
