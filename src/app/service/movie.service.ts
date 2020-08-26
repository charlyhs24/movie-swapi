import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlServicesService } from './url-services.service';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private urlServices: UrlServicesService) { }
  getMovie(url) {
    const URL = `${this.urlServices.base_url}/${url}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(URL, httpOptions);
  }
  getDetailCharacter(url) {
    const URL = `${this.urlServices.base_url}/${url}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(URL, httpOptions);
  }
  getListCharacter(url) {
    const URL = `${this.urlServices.base_url}/${url}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(URL, httpOptions);
  }
}
