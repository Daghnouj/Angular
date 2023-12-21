import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocComponent } from './Bloc.component';

describe('TypographyComponent', () => {
  let component: BlocComponent;
  let fixture: ComponentFixture<BlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
