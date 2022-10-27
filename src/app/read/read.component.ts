import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Students } from '../students';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private apiService: ApiserviceService) { }

  student: any;
  ngOnInit(): void {
    this.readAllData();
  }

  readAllData() {
    this.apiService.getAllStudents().subscribe({
      next: (value) => {
        this.student = value;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Successfuly Get all data");
      }
    })
  }

  deleteData(id: number) {
    this.apiService.deleteStudent(id).subscribe({
      next: (value) => {
        this.readAllData();
        alert("Deleted")
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Successfuly Delete");
      }
    })

  }

}
