import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {

  activities: string[] = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork'];

  searchForm = new FormGroup({
    typeOfActivity: new FormControl(''),
    numberOfParticipants: new FormControl(''),
    priceRange: new FormControl(''),
    accessibilityRange: new FormControl('')
  })
  constructor(
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.searchForm.value);
  }
}
