import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit {

  formValue!: FormGroup;
  restaurentModelObj: RestaurentData = new RestaurentData;
  allRestaurentData: any;
  serchText: any;
  restId: any;
  
  
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
     this.formValue = this.formBuilder.group({
      name: ['', Validators.required, Validators.maxLength(10)],
      email: ['', Validators.required, Validators.email],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      service: ['']
    })

    this.getAllData();

  }

  //Now subscribing our data which is mapped in services  
  addResto() {

    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    
    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurent Record Added Successfully");
      this.formValue.reset();
      this.getAllData(); //When you post any data
    },
      err => {
        alert("Something went wrong");
      }
    )
  }

  //Get all data
  getAllData() {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData = res;
    })
  }

  //Delete Records
  deleteResto(data: any) {
    this.api.deleteRestaurent(data.id).subscribe(res => {
      alert("Restaurent Records Deleted")
      this.getAllData(); //Quick refresh data
    })
  }

  onEditResto(data: any) {

    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);

  }

  updateResto() {

    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    
    this.api.updateRestaurent(this.restaurentModelObj, this.restaurentModelObj.id).subscribe(res => {
      alert("Restaurent Records Update");
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset();
      this.getAllData(); //When you post any data
    })

  }

  logout() {
    this.router.navigate(['signin'])
  }
  
  //This is done...

}
