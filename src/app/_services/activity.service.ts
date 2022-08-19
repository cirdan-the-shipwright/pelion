import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IActivity as IModel } from '../models/activity.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getActivity() {
    return this.http.get(`${this.url}/activity`);
  }

  getActivityByKey(key: string): Observable<IModel> {
    return this.http.get<IModel>(`${this.url}/activity?key=${key}`);
  }
}
