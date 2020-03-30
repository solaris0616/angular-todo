import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendFormComponent } from './append-form.component';

describe('AppendFormComponent', () => {
  let component: AppendFormComponent;
  let fixture: ComponentFixture<AppendFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppendFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
