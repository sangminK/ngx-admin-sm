import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTest1Component } from './menu-test1.component';

describe('MenuTest1Component', () => {
  let component: MenuTest1Component;
  let fixture: ComponentFixture<MenuTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
