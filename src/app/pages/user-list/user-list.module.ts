import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';

// CommonModule 없으면 html에서 쓸 수 있는 기능 많이 없음 ex)ngFor
// 원래 core module에 추가되있는데 왜 따로 추가해야 되는 거지???
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [CommonModule
  ]
})
export class UserListModule { }
