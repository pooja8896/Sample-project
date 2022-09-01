import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedocumentComponent } from './managedocument.component';

describe('ManagedocumentComponent', () => {
  let component: ManagedocumentComponent;
  let fixture: ComponentFixture<ManagedocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
