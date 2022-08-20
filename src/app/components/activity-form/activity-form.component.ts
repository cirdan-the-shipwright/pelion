import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IActivityRequest as IModel } from 'src/app/models/activity.interface';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter();

  activities: string[] = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork'];

  searchForm = new FormGroup({
    type: new FormControl(''),
    participants: new FormControl(null, Validators.min(1)),
    price: new FormControl(null, [Validators.min(0.0), Validators.max(1.0)]),
    accessibility: new FormControl(null, [Validators.min(0.0), Validators.max(1.0)])
  })
  constructor(
  ) { }

  ngOnInit(): void {
  }

  clear() {
    this.searchForm.reset();
  }

  submit() {
    const request: IModel = this.searchForm.value;
    this.submitForm.emit(request);
  }
}
