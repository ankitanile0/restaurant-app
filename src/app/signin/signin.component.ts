import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.signinForm = this.formBuilder.group(
      {
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required, Validators.maxLength(8)],
      }
    )

  }

  signIn(){
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password
      })
      if(user){
        alert("Login Successful");
        this.signinForm.reset();
        this.router.navigate(['restaurent-dash'])
      }else{
        alert("User Not Found !!")
      }
    }, err=>{
      alert("Something Went Wrong")
    })
  }

  get email(){
    return this.signinForm.get('email');
  }
  get password(){
    return this.signinForm.get('password');
  }


}
