import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsProvider {
  private url = 'https://blogger-developers.googleblog.com/';
  private apiKey = 'XXX-API-KEY-XXX';
  constructor() {}
  getUrl() {
    return '' + this.url;
  }
  getApiKey() {
    return '' + this.apiKey;
  }
}
