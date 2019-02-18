import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component import
import { MultiMenuComponent } from './multi-menu.component';
import { MenuTest1Component } from './menu-test1/menu-test1.component';
import { MenuTest2Component } from './menu-test2/menu-test2.component';
import { MenuTest3Component } from './menu-test3/menu-test3.component';



const routes: Routes = [{
  path: '',
  component: MultiMenuComponent,
  children: [
    {
      path: 'menu-test1',
      component: MenuTest1Component
    },
    {
      path: 'menu-test2',
      component: MenuTest2Component
    },
    {
      path: 'menu-test3',
      component: MenuTest3Component
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiMenuRoutingModule { }
