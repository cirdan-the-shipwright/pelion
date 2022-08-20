import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IActivity as IModel, IActivityRequest as IRequestModel } from '../models/activity.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getActivity(): Observable<IModel> {
    return this.http.get<IModel>(`${this.url}/activity`);
  }

  getActivityByKey(key: string): Observable<IModel> {
    return this.http.get<IModel>(`${this.url}/activity?key=${key}`);
  }

  getActivityByQuery(queryModel: IRequestModel): any {
    const queryParams = this.buildQuery(queryModel);
    return this.http.get<IModel>(`${this.url}/activity?${queryParams}`);
  }

  private buildQuery(queryModel: IRequestModel): string {
    let queryParams = '';
    if (!!queryModel.accessibility)
      queryParams += `accessibility=${queryModel.accessibility}&`;
    
    if (!!queryModel.participants)
      queryParams += `participants=${queryModel.participants}&`;
    
    if (!!queryModel.price)
      queryParams += `price=${queryModel.price}&`;

    if (!!queryModel.type)
      queryParams += `type=${queryModel.type.toLowerCase()}&`;
    
    return queryParams;
  }
}
