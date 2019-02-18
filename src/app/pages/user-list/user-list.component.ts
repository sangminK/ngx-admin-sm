import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../../@core/data/user';
import { UserService } from '../../common/api/user.service';

//
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import {map} from 'rxjs/operators';


@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns = ['id', 'name', 'salary', 'status'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //displayedColumns = ['ID', 'name', 'salary', 'status'];
  //dataSource;

  //@ViewChild(MatPaginator) paginator: MatPaginator;



  users: User[];
  users2: User[];
  user = new Object();   // server쪽 return값 User에서 Optional<User>로 수정
  // --> 바꾸고 나서 detail view 안보이는 것 해결

  //dataSource = new MatTableDataSource(this.getUsers2());
  
  collection = [];

  constructor(private userService: UserService, private router: Router) { 

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
    //alert(this.collection.length)

    //this.dataSource = new MatTableDataSource<User>(this.getUsers2());


  }

  ngOnInit() {
    this.getUsers();
    this.getUsers2();
    //this.getUser(19);
    //this.dataSource.paginator = this.paginator;
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  getUser(id: number) {
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  getUsers() {
    return this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        }
      );
  }

  // return json으로
  getUsers2() {
    return this.userService.getUsers()
    //.pipe(map(res => res.json()))
      .subscribe(
        users => {
           //this.users2 = users
           
           //this.dataSource = users
           //return users;
          //this.users2 = JSON.parse(users);
          //this.dataSource.paginator = this.paginator;

          this.dataSource= new MatTableDataSource(users);
          this.dataSource.sort= this.sort;
          this.dataSource.paginator=this.paginator;
        }
      );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  // 삭제
  deleteUser(id: number) {
    //alert(id)
    this.userService.deleteUser(id).subscribe();
    this.refresh()
  }



  // 검색1
  findBySalaryOrderByName(salary: number, order: number) {
    //alert(salary + "."+order)
    this.userService.findBySalaryOrderByName(salary, order).subscribe(
      res => { this.users = res }
    );
  }

  // 검색2
  findByStatusOrderByName(status: number, order: number) {
    this.userService.findByStatusOrderByName(status, order).subscribe(
      res => { this.users = res }
    );
  }

  // 검색3 (salary N 이상/이하)
  salaryGreaterLess(salary: number, greater: number) {
    this.userService.salaryGreaterLess(salary, greater).subscribe(
      res => { this.users = res }
    )
  }

  // 검색4
  salaryBetween(left: number, right: number) {
    this.userService.salaryBetween(left, right).subscribe(
      res => { this.users = res }
    )
  }

  // 키워드 검색
  searchKeyword(keyword: string) {

    this.userService.getUsers().subscribe(
      res => {
        let tmp = null;
        tmp = res.filter(function (item) {
          if (item.name.includes(keyword)) {
            return true;
          }
          else {
            return false;
          }
        })
        this.users = tmp;
      }
    )
  }

  // like
  findByNameLike(name: string) {
    this.userService.findByNameLike(name).subscribe(
      res => { this.users = res }
    )
  }


  // containing
  getByNameContaining(name: string) {
    alert(name)
    this.userService.getByNameContaining(name).subscribe(
      res => { this.users = res }
    )
  }

  // startingWith
  readByNameStartingWith(name: string ){
    this.userService.readByNameStartingWith(name).subscribe(
      res => { this.users = res }
    )
  }

  // like Query
  findByNameLikeQuery(name: string) {
    this.userService.findByNameLikeQuery(name).subscribe(
      res => { this.users = res }
    )
  }


  refresh() {
    window.location.reload();
  }

}
