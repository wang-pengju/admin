import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  PageTitle = "";
  routes = [];
  constructor(
    public router: Router
  ) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url == "/home/dashboard") {
          this.PageTitle = 'Dashboard';
        } else if (event.url.startsWith('/home/notice')) {
          this.PageTitle = 'Notice';
          this.routes = [];
        } else if (event.url.startsWith('/home/article')) {
          this.PageTitle = 'Article';
          this.routes = [
            { title: '所有文章', icon: 'icon-replyall', router: './article/all' },
            { title: '文章分类', icon: 'icon-navigation', router: './article/classify' },
            { title: '文章标签', icon: 'icon-label', router: './article/label' },
            { title: '发布文章', icon: 'icon-baobiao', router: './article/retease' }
          ];
        } else if (event.url.startsWith('/home/comment')) {
          this.PageTitle = 'Comment';
          this.routes = [
            { title: '评论管理', icon: 'icon-personaldata', router: './comment/manage' },
            { title: '评论统计', icon: 'icon-statistics', router: './comment/statistics' }
          ]
        } else if (event.url.startsWith('/home/setting')) {
          this.PageTitle = 'Setting';
          this.routes = [
            { title: '个性设置', icon: 'icon-write', router: './setting/personality' },
            { title: '开发工具', icon: 'icon-tool', router: './setting/tool' },
            { title: '个人资料', icon: 'icon-iconuser', router: './setting/data' }
          ]
        } else {
          this.PageTitle = 'Article';
          this.routes = [
            { title: '所有文章', icon: 'icon-replyall', router: './article/all' },
            { title: '文章分类', icon: 'icon-navigation', router: './article/classify' },
            { title: '文章标签', icon: 'icon-label', router: './article/label' },
            { title: '发布文章', icon: 'icon-baobiao', router: './article/retease' }
          ];
        }
      });
  }

  ngOnInit() {
  }

}
