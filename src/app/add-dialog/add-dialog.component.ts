import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  addnewline = new FormGroup({
    name: new FormControl('', Validators.required),
    discription: new FormControl('', Validators.required),
    size: new FormControl('',  Validators.required)
  });
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) { }

  ngOnInit(): void {
  }
  takeData = () => {
    const temp = {
        name: this.addnewline.controls.name.value,
        discription: this.addnewline.controls.discription.value,
        size: this.addnewline.controls.size.value
    };
    this.dialogRef.close(temp);

  }

}
