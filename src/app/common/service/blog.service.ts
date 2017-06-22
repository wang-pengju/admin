import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  constructor() { }
  private allArticle: Article[] = [
    new Article(1, "我的第一篇文章", ["css", "html"], "think", "这是我第一次发表文章", "think", "2017/05/31"),
    new Article(2, "我的第二篇文章", ["css", "html"], "think", "这是我第二次发表文章", "think", "2017/05/31"),
    new Article(3, "我的第三篇文章", ["css", "html"], "think", "这是我第三次发表文章", "code", "2017/05/31"),
    new Article(4, "我的第四篇文章", ["css", "html"], "think", "这是我第四次发表文章", "think", "2017/05/31"),
    new Article(5, "我的第五篇文章", ["css", "html"], "think", "这是我第五次发表文章", "think", "2017/05/31"),
    new Article(6, "我的第六篇文章", ["css", "html"], "think", "这是我第六次发表文章", "think", "2017/05/31")
  ]
  getArticles(): Article[] {
    return this.allArticle;
  }
  getArticle(id: number): Article {
    return this.allArticle.find(article => article.id == id);
  }
}

export class Article {
  constructor(
    public id: number,
    public title: string,
    public keyword: Array<string>,
    public tag: string,
    public describe: string,
    public classify: string,
    public date: string
  ) { }
}
