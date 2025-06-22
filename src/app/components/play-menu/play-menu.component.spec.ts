import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMenuComponent } from './play-menu.component';

describe('PlaymenuComponent', () => {
  let component: PlayMenuComponent;
  let fixture: ComponentFixture<PlayMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
