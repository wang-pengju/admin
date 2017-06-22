import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, BlogService } from '../../../common/service/blog.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  article: Article;
  constructor(private routeInfo: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    let articleId = this.routeInfo.snapshot.params['id'];
    this.article = this.blogService.getArticle(articleId);
  }

}
