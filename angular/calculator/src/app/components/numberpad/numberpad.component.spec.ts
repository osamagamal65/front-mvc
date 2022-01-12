import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersPadComponent } from './numberpad.component';

describe('NumbersPadComponent', () => {
  let component: NumbersPadComponent;
  let fixture: ComponentFixture<NumbersPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumbersPadComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
