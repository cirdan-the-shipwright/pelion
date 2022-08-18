import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getActivity() {
    return this.http.get(`${this.url}/activity`);
  }

  getActivityByKey(key: string) {
    return this.http.get(`${this.url}/activity?key=${key}`);
  }
}
