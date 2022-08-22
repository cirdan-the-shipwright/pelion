import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, forkJoin } from 'rxjs';
import { 
  IActivity as IModel,
  IActivityRequest as IRequestModel,
  IType,
  IPrice,
  ITools
} from '../models/activity.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Calls Bored API to retrieve any random activity.
   * @returns Observable of an Activity.
   */
  getActivity(): Observable<IModel> {
    return this.http.get<IModel>(`${this.url}/activity`);
  }

  /**
   * Calls Bored API to retrieve a single activity.
   * @param key Unique ID for an activity,
   * @returns Observable of an Activity.
   */
  getActivityByKey(key: string): Observable<IModel> {
    return this.http.get<IModel>(`${this.url}/activity?key=${key}`);
  }

  /**
   * Calls Bored API with a list of query params to retrieve a matching activity.
   * @param queryModel Query model of search criteria.
   * @returns Observable of an Activity.
   */
  getActivityByQuery(queryModel: IRequestModel): Observable<IModel> {
    const queryParams = this.buildQuery(queryModel);
    return this.http.get<IModel>(`${this.url}/activity?${queryParams}`);
  }

  /**
   * Provides list of tools for dropdowns.
   * @returns Observable of tools.
   */
  getTools(): Observable<ITools> {
    return forkJoin({
      types: this.http.get<IType[]>('/assets/types.json'),
      prices: this.http.get<IPrice[]>('/assets/prices.json'),
      accessibilities: this.http.get<IPrice[]>('/assets/accessibilities.json')
    });
  }

  /**
   * Builds the query for the HTTP Request.
   * @param queryModel Query model for search criteria
   * @returns Query string.
   */
  private buildQuery(queryModel: IRequestModel): string {
    let queryParams = '';

    if (!!queryModel.accessibilityMin)
      queryParams += `minaccessibility=${queryModel.accessibilityMin}&`;

    if (!!queryModel.accessibilityMax)
      queryParams += `maxaccessibility=${queryModel.accessibilityMax}&`;
    
    if (!!queryModel.participants)
      queryParams += `participants=${queryModel.participants}&`;
    
    if (!!queryModel.priceMin)
      queryParams += `minprice=${queryModel.priceMin}&`;

    if (!!queryModel.priceMax)
      queryParams += `maxprice=${queryModel.priceMax}&`;

    if (!!queryModel.type)
      queryParams += `type=${queryModel.type.toLowerCase()}&`;
    
    return queryParams;
  }
}
