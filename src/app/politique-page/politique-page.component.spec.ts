import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiquePageComponent } from './politique-page.component';

describe('PolitiquePageComponent', () => {
  let component: PolitiquePageComponent;
  let fixture: ComponentFixture<PolitiquePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiquePageComponent]
    });
    fixture = TestBed.createComponent(PolitiquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
