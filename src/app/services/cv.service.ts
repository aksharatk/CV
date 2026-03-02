import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

private api = 'http://localhost:3000/api/cv';
  constructor(private http: HttpClient) {}

  addCV(data: any): Observable<any> {
    return this.http.post(this.api, data);
  }

  getUsers(page: number): Observable<any> {
    return this.http.get(`${this.api}?page=${page}`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }
  updateUser(id: number, data: any): Observable<any> {
  return this.http.put(`${this.api}/${id}`, data);
}
}