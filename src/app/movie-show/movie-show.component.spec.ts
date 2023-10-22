import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShowComponent } from './movie-show.component';

describe('MovieShowComponent', () => {
  let component: MovieShowComponent;
  let fixture: ComponentFixture<MovieShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieShowComponent]
    });
    fixture = TestBed.createComponent(MovieShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
