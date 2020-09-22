import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo', // id , tagname, .class... tagname(sử dụng selector như tag name của component)
  templateUrl: './demo.component.html', // Nơi hiển thị nội dung UI của component(giống nộu dung hàm render)
  styleUrls: ['./demo.component.scss'] // Phần css của component này( component khác sử dụng k được)
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
