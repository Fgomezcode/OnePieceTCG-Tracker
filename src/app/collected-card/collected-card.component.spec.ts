import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedCardComponent } from './collected-card.component';

describe('CollectedCardComponent', () => {
  let component: CollectedCardComponent;
  let fixture: ComponentFixture<CollectedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectedCardComponent]
    });
    fixture = TestBed.createComponent(CollectedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
