import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  @Input() count: any;
  tab: any = [1,2,3]

  constructor() { }

  ngOnInit(): void {
  }

  inc(){
    this.count++
  }
}
