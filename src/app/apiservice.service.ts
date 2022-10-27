import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "http://localhost:3000/students";

  // get all data from json server

  getAllStudents(): Observable<Students> {
    return this.httpClient.get<Students>(`${this.apiUrl}`);
  }
  // get data from json server with id.

  getStudentId(id: number) {
    return this.httpClient.get<Students>(`${this.apiUrl}/${id}`);
  }

  // post data to json-server

  postStudent(body: Students): Observable<Students> {
    return this.httpClient.post<Students>(`${this.apiUrl}`, body);
  }

  // delete data from json server

  deleteStudent(id: number): Observable<Students> {
    return this.httpClient.delete<Students>(`${this.apiUrl}/${id}`)
  }

  // put data to json server

  putStudent(id: number, body: Students) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, body)
  }

}
