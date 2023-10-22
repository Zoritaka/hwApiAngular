import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrelReshkaComponent } from './orel-reshka.component';

describe('OrelReshkaComponent', () => {
  let component: OrelReshkaComponent;
  let fixture: ComponentFixture<OrelReshkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrelReshkaComponent]
    });
    fixture = TestBed.createComponent(OrelReshkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
