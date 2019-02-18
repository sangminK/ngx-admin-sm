import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTest3Component } from './menu-test3.component';

describe('MenuTest3Component', () => {
  let component: MenuTest3Component;
  let fixture: ComponentFixture<MenuTest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
