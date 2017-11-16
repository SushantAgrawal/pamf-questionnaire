import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Http, Headers, URLSearchParams } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { messages } from './app.config';
import 'rxjs/add/operator/filter';
import { urlMaps } from './app.config';
import { utils } from 'protractor';

@Injectable()
export class AppService {
  subject: Subject<any>;
  // urlMaps : {};
  urlParams: {};
  options: any;

  constructor(
    //private http: Http,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.subject = new Subject();
    this.getUrlParams();
    this.getOptions();
  }

  getOptions() {
    this
      .filterOn('file:options:json')
      .subscribe(d => {
        if (d.error) {
          console.log(d.error);
        } else {
          let options = d.data;
          let env = options.env;
          this.options = options.allEnvs[env];
        }
      })
    // this.httpGet('file:options:json');
  }

  getUrlParams() {
    let rawParams = decodeURIComponent(window.location.search);
    let urlArray = rawParams.slice(rawParams.indexOf('?') + 1).split('&');
    this.urlParams = urlArray.reduce((prevValue, x, i) => {
      let elementArray = x && x.split('=');
      (elementArray.length > 0) && (prevValue[elementArray[0]] = elementArray[1]);
      return (prevValue);
    }, {});
  }

  getRoute(url) {
    let urlArray = url.split('/');
    let route = (urlArray.length > 0) && (urlArray[urlArray.length - 1]);
    return (route);
  }

  emit(id: string, options?: any) {
    this
      .subject
      .next({ id: id, data: options });
  };

  filterOn(id: string): Observable<any> {
    return (this.subject.filter(d => (d.id === id)));
  };

  // httpPost1(id: string, body?: any) {
  //   let url = urlMaps[id];
  //   // let headers = new Headers(); headers.append('Content-Type',
  //   //   'application/json');
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   let urlSearchParams = new URLSearchParams();
  //   urlSearchParams.append('email', 'username');
  //   urlSearchParams.append('password', 'password');
  //   body = urlSearchParams.toString()
  //   // body = { "name": "sss" };
  //   this
  //     .http
  //     .post(url, body, { headers: headers })
  //     .subscribe(d => {
  //       this
  //         .subject
  //         .next({ id: id, data: d, body: body });
  //     }, err => {
  //       if (err.status && ((err.status == 200) || (err.status == 404))) {
  //         this
  //           .subject
  //           .next({ id: id, redirectUrl: err.url })
  //       } else {
  //         this
  //           .subject
  //           .next({ id: id, error: err });
  //       }
  //     });
  // };

  httpPost(id: string, body?: {}) {
    let url = urlMaps[id];
    // var headers = new HttpHeaders(); 
    // headers = headers.append('Content-Type','application/json');
    // body = JSON.stringify({ "name": "sss" });

    var headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');

    
    let httpParams = new HttpParams();
    

    httpParams = httpParams.append('email', 'username')
    httpParams = httpParams.append('password', 'password');
    body = httpParams.toString();

    this
      .httpClient
      .post(url, body, { headers: headers })
      .subscribe(d => {
        this
          .subject
          .next({ id: id, data: d, body: body });
      }, err => {
        if (err.status && ((err.status == 200) || (err.status == 404))) {
          this
            .subject
            .next({ id: id, redirectUrl: err.url })
        } else {
          this
            .subject
            .next({ id: id, error: err });
        }
      });
  };

  // httpGet(id: string, queryParams?: {
  //   name: string,
  //   value: string
  // }[], headers?: [any], carryBag?: any) {
  //   try {
  //     let url = urlMaps[id];
  //     let myParams = new URLSearchParams();
  //     queryParams && (queryParams.map(x => myParams.append(x.name, x.value)));

  //     let myHeaders = new Headers();
  //     headers && (headers.map(x => myHeaders.append(x.name, x.value)));
  //     let options;
  //     // (headers || queryParams) && (options = new RequestOptions({   headers:
  //     // headers     ? myHeaders     : null,   params: queryParams     ? myParams :
  //     // null }));
  //     if (url) {
  //       this
  //         .httpClient
  //         .get(url, options)
  //         // .map(response => response.json())
  //         .subscribe(d => {
  //           this
  //             .subject
  //             .next({ id: id, data: d, carryBag: carryBag });
  //         }, err => {
  //           this
  //             .subject
  //             .next({ id: id, error: err });
  //         });
  //     } else {
  //       this
  //         .subject
  //         .next({ id: id, error: messages.idNotMappedToUrl });
  //     }
  //   } catch (err) {
  //     this
  //       .subject
  //       .next({ id: id, error: messages.httpGetUnknownError });
  //   }
  // };
}
