import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
    selector : 'ngx-pagination',
    styleUrls: ['./pagination.component.scss'],
    templateUrl : './pagination.component.html',
})
export class PaginationComponent implements OnInit {

    @Input() page: number;
    @Output() movePage: EventEmitter<number> = new EventEmitter();
    @Input() size: number;
    @Input() totalPage: number;
    @Input() totalElement: number;
    @Input() pageStart: number;
    @Input() pageEnd: number;
    @Input() numberOfElements: number;
    start: number;
    end: number;

    constructor() {}

    ngOnInit() {
      this.start = this.page * this.size + 1;
      this.end = this.start + this.size - 1;
    }

    changePage(num) {
      if (num >= 0 && num < this.totalPage) {
        this.movePage.emit(num);
      }

    }
}
