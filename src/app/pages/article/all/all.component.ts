import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article, BlogService } from '../../../common/service/blog.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  private allArticle: Array<Article>;
  constructor(public router: Router, private blogService: BlogService) { }

  ngOnInit() {
    this.allArticle = this.blogService.getArticles();
  }

  update(article: Article) {
    this.router.navigateByUrl('/home/article/all/'+article.id);
  }

}
