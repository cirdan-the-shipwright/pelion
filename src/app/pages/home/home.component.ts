import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivityService as Service } from 'src/app/_services/activity.service';
import { IAccessibility, IActivity, IActivityRequest, IFormModel, IPrice, IType } from 'src/app/models/activity.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('result') el:ElementRef;
  activity: IActivity;
  iconName = 'home';
  types: IType[] = [];
  prices: IPrice[] = [];
  accessibilities: IAccessibility[] = [];

  constructor(
    private service: Service
  ) { }

  ngOnInit(): void {
    this.service.getTools().subscribe(res => { 
      this.types = res.types;
      this.prices = res.prices;
      this.accessibilities = res.accessibilities;
    });
  }

  /**
   * Retrieves activity data and displays on the page.
   * @param event Form values
   */
  getActivity(event: IFormModel) {
    const model: IActivityRequest = {
      accessibilityMin: !!event.accessibilityId ? this.accessibilities.find(x => x.id === event.accessibilityId).min : 0,
      accessibilityMax: !!event.accessibilityId ? this.accessibilities.find(x => x.id === event.accessibilityId).max : 0,
      participants: event.participants,
      priceMin: !!event.priceId ? this.prices.find(x => x.id === event.priceId).min : 0,
      priceMax: !!event.priceId ? this.prices.find(x => x.id === event.priceId).max : 0,
      type: !!event.typeId ? this.types.find(x => x.id === event.typeId).value : ''
    };

    this.service.getActivityByQuery(model).subscribe(res => {
      if (res['error']) {
        return;
      }

      this.iconName = this.types.find(x => x.value === res.type).icon;

      this.activity = res;
      this.el.nativeElement.scrollIntoView({behavior: 'smooth'});
    });
  }
}
