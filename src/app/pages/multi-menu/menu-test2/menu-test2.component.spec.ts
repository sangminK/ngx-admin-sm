import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTest2Component } from './menu-test2.component';

describe('MenuTest2Component', () => {
  let component: MenuTest2Component;
  let fixture: ComponentFixture<MenuTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
