import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharPictureComponent } from './char-picture.component';

describe('CharPictureComponent', () => {
  let component: CharPictureComponent;
  let fixture: ComponentFixture<CharPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
