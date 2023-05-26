import {Component, Input} from "@angular/core";

@Component({
  selector: 'text-box',
  template: `
    <div style="display: flex">
      <div *ngIf="!!label"  style="align-self: center; margin-right: 5px"><label> {{label + ': '}} </label> </div>
      <div style="margin-left: 45px">
        <mat-form-field appearance="outline">
          <mat-label>{{placeHolder}}</mat-label>
          <input matInput placeholder="Placeholder">
        </mat-form-field>
      </div>
    </div>
  `
})
export class TextBoxComponent {

  @Input() label: string;
  @Input() placeHolder: string = "Escreva...";
}
