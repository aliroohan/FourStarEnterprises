import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitiesComponent } from './qualities.component';

describe('QualitiesComponent', () => {
  let component: QualitiesComponent;
  let fixture: ComponentFixture<QualitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
