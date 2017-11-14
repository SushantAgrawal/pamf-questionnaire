import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {messages} from './app.config';
import 'rxjs/add/operator/filter';
import {urlMaps} from './app.config';

@Injectable()
export class AppService {
  subject : Subject < any >;
  urlMaps : {};
  urlParams:{};

  constructor(private httpClient : HttpClient, private activatedRoute : ActivatedRoute, private router : Router) {
    this.subject = new Subject();
    this.setUrlParams();
  }

  setUrlParams() {    
    let rawParams = window.location.search;
    let urlArray = rawParams.slice(rawParams.indexOf('?') + 1).split('&');
    this.urlParams = urlArray.reduce((prevValue, x, i) => {
      let elementArray = x && x.split('=');
      (elementArray.length > 0) && (prevValue[elementArray[0]] = elementArray[1]);
      return (prevValue);
    }, {});
  }

  emit(id : string, options?: any) {
    this
      .subject
      .next({id: id, data: options});
  };

  filterOn(id : string) : Observable < any > {
    return(this.subject.filter(d => (d.id === id)));
  };

  httpPost(id : string, body?: any) {
    let url = urlMaps[id];
    // let headers = new HttpHeaders(); headers.append('Content-Type',
    // 'application/json');
    this
      .httpClient
      .post(url, body)
      .subscribe(d => {
        this
          .subject
          .next({id: id, data: d, body: body});
      }, err => {
        if (err.status && (err.status == 200)) {
          this
            .subject
            .next({id: id, redirectUrl: err.url})
        } else {
          this
            .subject
            .next({id: id, error: err});
        }
      });
  };

  httpGet(id : string, queryParams?: {
    name: string,
    value: string
  }[], headers?: [any], carryBag?: any) {
    try {
      let url = this.urlMaps[id];
      let myParams = new URLSearchParams();
      queryParams && (queryParams.map(x => myParams.append(x.name, x.value)));

      let myHeaders = new Headers();
      headers && (headers.map(x => myHeaders.append(x.name, x.value)));
      let options;
      // (headers || queryParams) && (options = new RequestOptions({   headers:
      // headers     ? myHeaders     : null,   params: queryParams     ? myParams :
      // null }));
      if (url) {
        this
          .httpClient
          .get(url, options)
          // .map(response => response.json())
          .subscribe(d => {
            this
              .subject
              .next({id: id, data: d, carryBag: carryBag});
          }, err => {
            this
              .subject
              .next({id: id, error: err});
          });
      } else {
        this
          .subject
          .next({id: id, error: messages.idNotMappedToUrl});
      }
    } catch (err) {
      this
        .subject
        .next({id: id, error: messages.httpGetUnknownError});
    }
  };
}
