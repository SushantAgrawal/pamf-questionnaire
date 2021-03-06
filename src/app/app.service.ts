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
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { hipQuestions, kneeQuestions, promisQuestions, collaborate } from './app.questions';
import { Ng2DeviceService } from 'ng2-device-detector';


@Injectable()
export class AppService {
  subject: Subject<any>;
  urlParams: any;
  deviceInfo = null;
  constructor(private deviceService: Ng2DeviceService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.subject = new Subject();
    let rawParams = decodeURIComponent(window.location.search)
    this.getUrlParams(rawParams);
  }

  getUrlParams(rawParams) {
    rawParams = decodeURIComponent(rawParams);
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
    return { host: parser.host, hostname: parser.hostname, port: parser.port, pathname: parser.pathname, searchObject: searchObject };
  }

  getRoute(url) {
    let urlObject = this.parseURL(url);
    let urlArray = urlObject
      .pathname
      .split('/')
      .filter(x => x);
    let route = (urlArray.length > 0) && (urlArray[urlArray.length - 1]);
    return (route);
  }
  
  fillHipQuestionsTopSec() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    let date = new Date();
    hipQuestions.code = this.urlParams.c1;
    hipQuestions.bundle = this.urlParams.c2;
    hipQuestions.surgery_type = this.urlParams.c3;
    hipQuestions.channel = this.urlParams.c4;
    hipQuestions.qx_name = 'HOOS';
    hipQuestions.qx_id = '358';
    hipQuestions.qx_vendor = 'newpro';
    hipQuestions.qx_os = this.deviceInfo.os;
    hipQuestions.qx_browser = this.deviceInfo.browser;
    hipQuestions.qx_device = this.deviceInfo.device;
    hipQuestions.qx_ip_address = '';
    hipQuestions.qx_started_at = this.urlParams.c14 ? this.urlParams.c14 : this.transform();
    hipQuestions.qx_accessed_at = hipQuestions.qx_started_at;
    hipQuestions.qx_accessed_by = this.urlParams.c11;
    hipQuestions.qx_completed_at = hipQuestions.qx_started_at;
    hipQuestions.qx_status = 'COMPLETED';
  }

  fillKneeQuestionsTopSec() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    let date = new Date();
    kneeQuestions.code = this.urlParams.c1;
    kneeQuestions.bundle = this.urlParams.c2;
    kneeQuestions.surgery_type = this.urlParams.c3;
    kneeQuestions.channel = this.urlParams.c4;
    kneeQuestions.qx_name = 'KOOS';
    kneeQuestions.qx_id = '357';
    kneeQuestions.qx_vendor = 'newpro';
    kneeQuestions.qx_os = this.deviceInfo.os;
    kneeQuestions.qx_browser = this.deviceInfo.browser;
    kneeQuestions.qx_device = this.deviceInfo.device;
    kneeQuestions.qx_ip_address = '';
    kneeQuestions.qx_started_at = this.urlParams.c14 ? this.urlParams.c14 : this.transform();
    kneeQuestions.qx_accessed_at = hipQuestions.qx_started_at;
    kneeQuestions.qx_accessed_by = this.urlParams.c11;
    kneeQuestions.qx_completed_at = hipQuestions.qx_started_at;
    kneeQuestions.qx_status = 'COMPLETED';
  }

  fillPromisQuestionsTopSec() {
    let date = new Date();
    this.deviceInfo = this.deviceService.getDeviceInfo();
    promisQuestions.code = this.urlParams.c1;
    promisQuestions.bundle = this.urlParams.c2;
    promisQuestions.surgery_type = this.urlParams.c3;
    promisQuestions.channel = this.urlParams.c4;
    promisQuestions.qx_name = 'PROMIS';
    promisQuestions.qx_id = '356';
    promisQuestions.qx_vendor = 'newpro';
    promisQuestions.qx_os = this.deviceInfo.os;
    promisQuestions.qx_browser = this.deviceInfo.browser;
    promisQuestions.qx_device = this.deviceInfo.device;
    promisQuestions.qx_ip_address = '';
    promisQuestions.qx_started_at = this.urlParams.c14 ? this.urlParams.c14 : this.transform();
    promisQuestions.qx_accessed_at = hipQuestions.qx_started_at;
    promisQuestions.qx_accessed_by = this.urlParams.c11;
    promisQuestions.qx_completed_at = hipQuestions.qx_started_at;
    promisQuestions.qx_status = 'COMPLETED';
  }

  fillCollaborateTopSec() {
    let date = new Date();
    this.deviceInfo = this.deviceService.getDeviceInfo();
    collaborate.code = this.urlParams.c1;
    collaborate.bundle = this.urlParams.c2;
    collaborate.surgery_type = this.urlParams.c3;
    collaborate.channel = this.urlParams.c4;
    collaborate.qx_name = 'COLLABORATE';
    collaborate.qx_id = '356';
    collaborate.qx_vendor = 'newpro';
    collaborate.qx_os = this.deviceInfo.os;
    collaborate.qx_browser = this.deviceInfo.browser;
    collaborate.qx_device = this.deviceInfo.device;
    collaborate.qx_ip_address = '';
    collaborate.qx_started_at = (this.urlParams.c14) ? this.urlParams.c14 : this.transform();
    collaborate.qx_accessed_at = hipQuestions.qx_started_at;
    collaborate.qx_accessed_by = this.urlParams.c11;
    collaborate.qx_completed_at = hipQuestions.qx_started_at;
    collaborate.qx_status = 'COMPLETED';
  }
  transform() {
    let today = Date.now();
    var datePipe = new DatePipe("en-US");
    let value = datePipe.transform(today, 'yyyy-MM-dd HH:mm:ss');
    return value;
  }

  emit(id: string, options?: any) {
    this
      .subject
      .next({ id: id, data: options });
  };

  filterOn(id: string): Observable<any> {
    return (this.subject.filter(d => (d.id === id)));
  };

  httpPost(id: string, body?: {}, queryParams?: {}) {
    let baseUrl = environment
      .maestroBaseUrl
      .replace(/\/$/, '');
    let path = environment.maestroPath;
    let url = baseUrl.concat('/', path, '/', urlMaps[id]);
    if (queryParams) {
      let httpParams = new HttpParams();
      httpParams = Object
        .keys(queryParams)
        .reduce((prev, x, i) => {
          httpParams = httpParams.append(x, queryParams[x]);
          return (httpParams);
        }, httpParams);
      queryParams = httpParams;
    }
    this
      .httpClient
      .post(url, body, { params: queryParams })
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

  httpGet(id: string, queryParams?: {}) {
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
      httpParams= httpParams?httpParams.append("random",Math.random().toString()):new HttpParams().append("random",Math.random().toString());
      if (url) {
        this
          .httpClient
          .get(url, { params: httpParams })
          .subscribe(d => {
            this
              .subject
              .next({ id: id, data: d });
          }, err => {
            this.subject.next({ id: id, error: err });
          });
      } else {
        this
          .subject
          .next({ id: id, error: messages.idNotMappedToUrl })
      }
    } catch (err) {
      this
        .subject
        .next({ id: id, error: messages.httpGetUnknownError })
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