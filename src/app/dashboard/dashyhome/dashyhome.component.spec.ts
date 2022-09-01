import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashyhomeComponent } from './dashyhome.component';

describe('DashyhomeComponent', () => {
  let component: DashyhomeComponent;
  let fixture: ComponentFixture<DashyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashyhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
