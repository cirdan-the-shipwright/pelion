import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAccessibility, IFormModel, IPrice, IType } from 'src/app/models/activity.interface';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  @Input() types: IType[];
  @Input() prices: IPrice[];
  @Input() accessibilities: IAccessibility[];
  @Output() submitForm = new EventEmitter();

  searchForm = new FormGroup({
    typeId: new FormControl(''),
    participants: new FormControl(null, Validators.min(1)),
    priceId: new FormControl(null),
    accessibilityId: new FormControl(null)
  })
  constructor(
  ) { }

  ngOnInit(): void {
  }

  /**
   * Clears the form.
   */
  clear() {
    this.searchForm.reset();
  }

  /**
   * Calls parent component with form values.
   */
  submit() {
    const request: IFormModel = this.searchForm.value;
    this.submitForm.emit(request);
  }
}
