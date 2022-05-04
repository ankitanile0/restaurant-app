import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurentData } from '../restaurent-dash/restaurent.model';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-goto-select',
  templateUrl: './goto-select.component.html',
  styleUrls: ['./goto-select.component.css']
})
export class GotoSelectComponent implements OnInit {

  restaurentModelObj: RestaurentData = new RestaurentData;
  restId:any;
  allRestaurentData: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.getAllData();
  }

  getAllData() {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData = res;
    })
  }


}
