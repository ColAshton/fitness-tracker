import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
  ],
  template: `<div class="stopDialog">
    <h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>
      <p>You've already achieved {{ passedData.progress }}%</p>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
      <button mat-stroked-button [mat-dialog-close]="true">Yes</button>
      <button mat-stroked-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
  </div>`,
  styles: '.stopDialog{padding:10px; text-align:center;}',
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) protected passedData: any) {}
}
