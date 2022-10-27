import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute, Router  } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Students } from '../students';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private apiService: ApiserviceService, private activatedRoute: ActivatedRoute, private router:Router ) { }

  studentForm: any
  id = this.activatedRoute.snapshot.params["id"]
  ngOnInit(): void {      
    this.studentForm = new FormGroup({
      "name": new FormControl(''),
      "email": new FormControl('')
    })

    if (this.id) {
      this.apiService.getStudentId(this.id).subscribe({
        next: (value) => {
          this.formFill(value); console.log(value);
        }
      })
    }
   
  }



  postData() {
    this.apiService.postStudent(this.studentForm.value).subscribe({
      next: (value) => {
        console.log(value);
        this.studentForm.reset();
        alert("Created")

      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Successfuly Post data");
      }
    })
  }




  
  
  formFill(value: any) {
    this.studentForm.controls["name"].setValue(value.name);
    this.studentForm.controls["email"].setValue(value.email);
  }

  putData() {
    this.apiService.putStudent(this.id, this.studentForm.value).subscribe({
      next: (value) => {
        console.log(value);
        alert("Updated");
        this.router.navigate(['/read']);

      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Successfully put data");
      }
    })
  }

  
}
