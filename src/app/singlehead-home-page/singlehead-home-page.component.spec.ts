import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleheadHomePageComponent } from './singlehead-home-page.component';

describe('SingleheadHomePageComponent', () => {
  let component: SingleheadHomePageComponent;
  let fixture: ComponentFixture<SingleheadHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleheadHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleheadHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
