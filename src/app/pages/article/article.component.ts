import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articlebase = [
    { title:'所有文章', icon:'icon-replyall', router: 'all'},
    { title:'文章分类', icon:'icon-navigation', router: 'classify'},
    { title:'文章标签', icon:'icon-label', router: 'label'},
    { title:'发布文章', icon:'icon-baobiao', router: 'retease'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
