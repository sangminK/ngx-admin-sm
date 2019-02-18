import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { OneComponent } from './one/one.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    // 단일이면 바로 컴포넌트 연결
    // UserListModule에 UserListComponent 추가하고
    // UserListModule을 PagesModule에 꼭! 추가해야함
    {
      path: 'user-list',
      component: UserListComponent,
    },

    {
      path: 'one',
      component: OneComponent
    },

    // 서브 메뉴 있으면 #module 로 연결
    {
      path: 'sub-menu',
      loadChildren: './sub-menu/sub-menu.module#SubMenuModule',
      //link: '/pages/sub-menu/paging',
    },
    {
      path: 'multi-menu',
      loadChildren: './multi-menu/multi-menu.module#MultiMenuModule',
    },


    /////////////////////////////////////////////

    {
      path: 'extra-components',
      loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
    },


    
    {
      path: 'dashboard',
      component: ECommerceComponent,
    }, 
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    }, 
  {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, 
  {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  },

   {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
