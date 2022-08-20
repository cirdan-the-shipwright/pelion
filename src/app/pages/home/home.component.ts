import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivityService as Service } from 'src/app/_services/activity.service';
import { IActivity, IActivityRequest as IModel } from 'src/app/models/activity.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('result') el:ElementRef;
  activity: IActivity;
  iconName = 'home';

  constructor(
    private service: Service
  ) { }

  getActivity(event: IModel) {
    this.service.getActivityByQuery(event).subscribe(res => {
      if (res['error']) {
        return;
      }

      switch(res.type) { 
        case 'education': { 
           this.iconName = 'library_books';
           break; 
        } 
        case 'recreational': { 
          this.iconName = 'hiking';
          break; 
        }
        case 'social': { 
          this.iconName = 'groups';
          break; 
        }
        case 'diy': { 
          this.iconName = 'engineering';
          break; 
        }
        case 'charity': { 
          this.iconName = 'food_bank';
          break; 
        }
        case 'cooking': { 
          this.iconName = 'microwave';
          break; 
        }
        case 'relaxation': { 
          this.iconName = 'self_improvement';
          break; 
        }
        case 'music': { 
          this.iconName = 'headphones';
          break; 
        }
        case 'soap': { 
          this.iconName = 'busywork';
          break; 
        }
        default: { 
           this.iconName = 'home';
           break; 
        } 
     } 
      this.activity = res;
      this.el.nativeElement.scrollIntoView({behavior: 'smooth'});
    });
  }
}
