import { Component, OnInit } from '@angular/core';
import { ActivityService as Service } from 'src/app/_services/activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pelion';

  constructor(private service: Service) {}
  
  ngOnInit(): void {
    this.service.getActivity().subscribe(res => {
      console.log(res);
    });
  }

}
