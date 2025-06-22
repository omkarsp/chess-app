import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaymenuComponent } from './playmenu.component';

describe('PlaymenuComponent', () => {
  let component: PlaymenuComponent;
  let fixture: ComponentFixture<PlaymenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaymenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
