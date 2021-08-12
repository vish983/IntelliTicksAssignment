import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  userArray;
  oneAdd = [];

  constructor( private dialoge: MatDialog, private apiservice: ApiService){}

  ngOnInit(): void{

    // fetch('https://jsonplaceholder.typicode.com/users ')
    //   .then(response => response.json())
    //   .then(userDataArray => {
    //     this.apiservice.insertBulk(userDataArray).subscribe((res) => {
    //       console.log('inserted data successfully');
    //     });
    //   });
    // after 3s, fetching data

    this.apiservice.getData().subscribe((res) => {
      this.userArray = res;
      console.log(this.userArray);
    });

  }
  deleteLine = (ID, index) => {
    const apiParams = {
      id: ID,
    };

    Swal.fire({
      icon: 'info',
      text: 'Are you sure?'
    }).then((result) => {
      if (result.isConfirmed) {
           this.apiservice.deleteOne(apiParams).subscribe((res) => {
            console.log(res);
            this.userArray.splice(index, 1);
            Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
       });
      }
    });
    console.log(this.userArray);
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
      this.apiservice.insertData(temp).subscribe(res => {
        console.log(res);
      });
      this.userArray.push(temp);
    });
  }
}
