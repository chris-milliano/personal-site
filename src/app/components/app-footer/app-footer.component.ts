import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var ga:Function;

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      let page = this.route.snapshot.url;
      console.log(`Send GA pageview: /${page}`);
      console.log(`/${page}`);
      ga('set', 'page', `/${page}`);
      ga('send', 'pageview')
  }

}
