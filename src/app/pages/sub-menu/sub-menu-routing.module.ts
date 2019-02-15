import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component import
import { SubMenuComponent } from './sub-menu.component';
import { PagingComponent } from './paging/paging.component';
import { Menu2Component } from './menu2/menu2.component';

const routes: Routes = [{
  path: '',
  component: SubMenuComponent,
  children: [
    {
      path: 'paging',
      component: PagingComponent,
    },
    {
      path: 'menu2',
      component: Menu2Component
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubMenuRoutingModule { }
