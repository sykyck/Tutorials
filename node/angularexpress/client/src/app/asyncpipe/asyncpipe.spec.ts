import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asyncpipe } from './asyncpipe';

describe('Asyncpipe', () => {
  let component: Asyncpipe;
  let fixture: ComponentFixture<Asyncpipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asyncpipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asyncpipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
