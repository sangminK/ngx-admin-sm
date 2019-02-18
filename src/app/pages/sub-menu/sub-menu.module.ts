import { NgModule } from '@angular/core';

// module
import { SubMenuRoutingModule } from './sub-menu-routing.module';

// COMPONENTS
import { SubMenuComponent } from './sub-menu.component';
import { PagingComponent } from './paging/paging.component';
import { Menu2Component } from './menu2/menu2.component';


const COMPONENTS = [
  SubMenuComponent,
  PagingComponent,
  Menu2Component
];

const SERVICES = [];

const MODULES = [
  SubMenuRoutingModule
];

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
export class SubMenuModule { }
