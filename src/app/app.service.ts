import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// import { Http, Headers, URLSearchParams } from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {messages} from './app.config';
import 'rxjs/add/operator/filter';
import {urlMaps} from './app.config';
import {utils} from 'protractor';
import {environment} from '../environments/environment';
@Injectable()
export class AppService {
  subject : Subject < any >;
  urlParams : any;
  // settings: any;

  constructor(private httpClient : HttpClient, private activatedRoute : ActivatedRoute, private router : Router) {
    this.subject = new Subject();
    this.getUrlParams();
    // this.getSettings();
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

  setUrlParam(name, value) {
    this.urlParams[name] = value;
  }

  parseURL(url) {
    let parser = document.createElement('a'),
      searchObject = {},
      queries,
      split,
      i;
    parser.href = url;
    // Convert query string to object
    queries = parser
      .search
      .replace(/^\?/, '')
      .split('&');
    for (i = 0; i < queries.length; i++) {
      split = queries[i].split('=');
      searchObject[split[0]] = split[1];
    }
    return {host: parser.host, hostname: parser.hostname, port: parser.port, pathname: parser.pathname, searchObject: searchObject};
  }

  getRoute(url) {
    // url = new URL(url);
    let urlObject = this.parseURL(url);
    let urlArray = urlObject
      .pathname
      .split('/')
      .filter(x => x);
    // let urlArray = url   .pathname   .split('/')   .filter(x => x);
    let route = (urlArray.length > 0) && (urlArray[urlArray.length - 1]);
    // let route = 'incorrectTjr';
    return (route);
  }

  emit(id : string, options?: any) {
    this
      .subject
      .next({id: id, data: options});
  };

  filterOn(id : string) : Observable < any > {
    return(this.subject.filter(d => (d.id === id)));
  };

  httpPost(id : string, body?: {}, queryParams?: {}) {
    let baseUrl = environment
      .maestroBaseUrl
      .replace(/\/$/, '');
    let path = environment.maestroPath;
    let url = baseUrl.concat('/', path, '/', urlMaps[id]);
    // if (body) {   var headers = new HttpHeaders();   headers =
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');   let
    // httpParams = new HttpParams();   httpParams = Object     .keys(body)
    // .reduce((prevValue, x, i) => {       httpParams = httpParams.append(x,
    // body[x]);       return (httpParams);     }, httpParams);   body =
    // httpParams.toString(); }
    if (queryParams) {
      let httpParams = new HttpParams();
      httpParams = Object
        .keys(queryParams)
        .reduce((prev, x, i) => {
          httpParams = httpParams.append(x, queryParams[x]);
          return (httpParams);
        }, httpParams);
      queryParams = httpParams;
    } //headers: headers,
    this
      .httpClient
      .post(url, body, {params: queryParams})
      .subscribe(d => {
        this
          .subject
          .next({id: id, data: d, body: body});
      }, err => {
        if (err.status && ((err.status == 200) || (err.status == 404))) {
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

  httpGet(id : string, queryParams?: {}) {
    try {
      let baseUrl = environment
        .maestroBaseUrl
        .replace(/\/$/, '');
      let path = environment.maestroPath;
      let url = baseUrl.concat('/', path, '/', urlMaps[id]);
      let httpParams = new HttpParams();
      httpParams = queryParams && (Object.keys(queryParams).reduce((prevValue, x, i) => {
        httpParams = httpParams.append(x, queryParams[x]);
        return (httpParams);
      }, httpParams));
      if (url) {
        this
          .httpClient
          .get(url, {params: httpParams})
          .subscribe(d => {
            this
              .subject
              .next({id: id, data: d});
          }, err => {
            if (err.status && ((err.status == 200) || (err.status == 404))) {
              this
                .subject
                .next({id: id, redirectUrl: err.url})
            } else {
              this
                .subject
                .next({id: id, error: err});
            }
            // this   .subject   .next({id: id, error: err});
          });
      } else {
        this
          .subject
          .next({id: id, error: messages.idNotMappedToUrl})
      }
    } catch (err) {
      this
        .subject
        .next({id: id, error: messages.httpGetUnknownError})
    }
  }
}

// deprecated getSettings() {   this.httpClient     .get('assets/settings.json')
//     .subscribe(d => {       let env = (d as any).env;       let allEnvs = (d
// as any).allEnvs;       // this.settings = allEnvs[env];     }, err => {
// console.log(err);     }); } httpPost1(id: string, body?: any) {   let url =
// urlMaps[id];   // let headers = new Headers(); headers.append('Content-Type',
//   //   'application/json'); var headers = new Headers();
// headers.append('Content-Type', 'application/x-www-form-urlencoded');   let
// urlSearchParams = new URLSearchParams();   urlSearchParams.append('email',
// 'username'); urlSearchParams.append('password', 'password');   body =
// urlSearchParams.toString()   // body = { "name": "sss" };   this     .http
// .post(url, body, { headers: headers })     .subscribe(d => {       this
// .subject         .next({ id: id, data: d, body: body });     }, err => { if
// (err.status && ((err.status == 200) || (err.status == 404))) { this .subject
//       .next({ id: id, redirectUrl: err.url })   } else {    this .subject
//  .next({ id: id, error: err });       }   }); }; httpGet(id : string,
// queryParams?: {     name: string,     value: string }[], headers?: [any],
// carryBag?: any) {     try {       let url = urlMaps[id];   let myParams = new
// URLSearchParams();       queryParams && (queryParams.map(x =>
// myParams.append(x.name, x.value)));       let myHeaders = new Headers();
// headers && (headers.map(x => myHeaders.append(x.name, x.value)));       let
// options; // (headers || queryParams) && (options = new RequestOptions({
// headers : // headers     ? myHeaders     : null, params: queryParams ?
// myParams         :         null }));         if (url) {       this
// .httpClient           .get(url, options) .map(response => response.json())
//  .subscribe(d => {           this           .subject .next({id: id, data: d,
// carryBag: carryBag});        }, err => { this             .subject .next({id:
// id, error: err});         });     } else {       this .subject     .next({id:
// id, error: messages.idNotMappedToUrl});     }   } catch (err) {     this
// .subject .next({id: id, error: messages.httpGetUnknownError});   } };