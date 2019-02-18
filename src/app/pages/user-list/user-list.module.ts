import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';



// material 관련
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatInputModule } from '@angular/material'

// npx-pagination
import { NgxPaginationModule } from 'ngx-pagination'



// CommonModule 없으면 html에서 쓸 수 있는 기능 많이 없음 ex)ngFor
// 원래 core module에 추가되있는데 왜 따로 추가해야 되는 거지???
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UserListModule { }
