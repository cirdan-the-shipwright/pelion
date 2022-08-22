import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './mat-snack-bar.component.html',
  styleUrls: ['./mat-snack-bar.component.scss']
})
export class MatSnackBarComponent  {

	constructor(public _snackBar: MatSnackBar) {}

  /**
   * Opens the snackbar.
   * @param message Message to display in Snackbar
   */
	openSnackBar(message: string) {
      this._snackBar.open(message, 'Dismiss', {
        duration: 5000
      });
	 }
}
