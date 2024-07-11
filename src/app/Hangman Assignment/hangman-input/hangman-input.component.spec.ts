import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanInputComponent } from './hangman-input.component';

describe('HangmanInputComponent', () => {
  let component: HangmanInputComponent;
  let fixture: ComponentFixture<HangmanInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangmanInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
