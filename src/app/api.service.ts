import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getData = () => {
    return this.http.get('http://localhost:3000/getAllData');
  }

  deleteOne = (data) => {
    return this.http.delete('http://localhost:3000/delete', data);
  }

  insertData = (data) => {
    return this.http.post('http://localhost:3000/insertData', data);
  }

  insertBulk = (data) => {
    return this.http.post('http://localhost:3000/insertBulk', data);
  }

}
