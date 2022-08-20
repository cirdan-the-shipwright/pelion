import { Component } from '@angular/core';
import { ActivityService as Service } from 'src/app/_services/activity.service';
import { IActivityRequest as IModel } from 'src/app/models/activity.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private service: Service
  ) { }

  getActivity(event: IModel) {
    this.service.getActivityByQuery(event).subscribe(res => {
      console.log(res);
    });
  }
}
