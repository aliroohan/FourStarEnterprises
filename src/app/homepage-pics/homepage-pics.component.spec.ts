import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePicsComponent } from './homepage-pics.component';

describe('HomepagePicsComponent', () => {
  let component: HomepagePicsComponent;
  let fixture: ComponentFixture<HomepagePicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepagePicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagePicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
