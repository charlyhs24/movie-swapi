import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlServicesService {
  developmet_mode: string = 'dev';
  base_url: string;
  constructor() {
    switch (this.developmet_mode) {
      case 'dev':
        this.dev();
        break;
      case 'uat':
        break;
        this.uat();
      case 'stg':
        this.stg();
        break;
      case 'prod':
        this.production();
        break
      default:
        alert('development mode not provided !');
        break;
    }
  }
  dev() {
    this.base_url = 'https://swapi.dev/api';
  }
  uat() {
    this.base_url = 'https://swapi.dev/api';
  }
  stg() {
    this.base_url = 'https://swapi.dev/api';
  }
  production() {
    this.base_url = 'https://swapi.dev/api';
  }
}
