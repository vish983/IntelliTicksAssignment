import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  userArray = [];
oneAdd = [];

  constructor( private dialoge: MatDialog){}

  ngOnInit(): void{

    fetch('https://jsonplaceholder.typicode.com/users ')
    .then(response => response.json())
    .then(json => {
    this.userArray = json;
  });
  }
  deleteLine = (index) => {
    this.userArray.splice(index, 1);
  }

  openAddDialog = () => {
    const opendialog = this.dialoge.open(AddDialogComponent, {
        width: '450px',
    });
    opendialog.afterClosed().subscribe(result => {
      const temp = {
        id: this.userArray.length + 1,
        name: result.name,
        company: {
          name: result.discription
        },
        address: {
         zipcode: result.size
        },
      };
      this.userArray.push(temp);
    });
  }
}
