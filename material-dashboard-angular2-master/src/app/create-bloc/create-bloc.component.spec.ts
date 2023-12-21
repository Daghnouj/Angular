import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlocComponent } from './create-bloc.component';

describe('CreateBlocComponent', () => {
  let component: CreateBlocComponent;
  let fixture: ComponentFixture<CreateBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
