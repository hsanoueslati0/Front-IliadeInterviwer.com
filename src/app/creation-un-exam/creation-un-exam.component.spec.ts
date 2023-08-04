import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationUnExamComponent } from './creation-un-exam.component';

describe('CreationUnExamComponent', () => {
  let component: CreationUnExamComponent;
  let fixture: ComponentFixture<CreationUnExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationUnExamComponent]
    });
    fixture = TestBed.createComponent(CreationUnExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
