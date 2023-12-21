import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoyerComponent } from './create-foyer.component';

describe('CreateFoyerComponent', () => {
  let component: CreateFoyerComponent;
  let fixture: ComponentFixture<CreateFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
