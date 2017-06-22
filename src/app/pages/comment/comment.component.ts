import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  commentbase = [
    { title:'评论管理', icon:'icon-personaldata', router: 'manage'},
    { title:'评论统计', icon:'icon-statistics', router: 'statistics'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
