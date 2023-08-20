import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  title = 'news-app';
  mSources:Array<any> = [];
  mArticles:Array<any> = [];
  constructor(private newsService: NewsApiService) {

  }
  ngOnInit() {
    this.newsService.initSources().subscribe((data) => {
      this.mSources = data['sources'];
    });
    this.newsService.initArticles().subscribe(data => {
      this.mArticles = data['articles'];
    });
  }

  searchArticles(source: string | String){
    console.log("selected source is: "+source);
    this.newsService.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  toggleSideNav() {
    if(this.sidenav) {
      if(this.sidenav.opened) this.sidenav.close();
      else {
        this.sidenav.open();
      }
    }
  }

}
