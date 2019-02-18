import { NgModule } from '@angular/core';

// MODULES
import { MultiMenuRoutingModule} from './multi-menu-routing.module'

//import { CommonModule } from '@angular/common';

// COMPONENTS
import { MultiMenuComponent } from './multi-menu.component';
import { MenuTest1Component } from './menu-test1/menu-test1.component';
import { MenuTest2Component } from './menu-test2/menu-test2.component';
import { MenuTest3Component } from './menu-test3/menu-test3.component';

const COMPONENTS = [
  MultiMenuComponent,
  MenuTest1Component,
  MenuTest2Component,
  MenuTest3Component
];

// *****
const MODULES = [
  MultiMenuRoutingModule
  //CommonModule
];

const SERVICES = [];



@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MultiMenuModule { }
