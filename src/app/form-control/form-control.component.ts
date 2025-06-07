import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements AfterViewInit {
loginForm!:FormGroup;
@ViewChild('usmartimg') labelement!: ElementRef;
constructor(
  public fb: FormBuilder,
public router:Router){
this.initializeForm();
}
initializeForm(){
  this.loginForm=this.fb.group({
    username:["",Validators.required],
    password:["",Validators.required],
    workEmail: [
      '',
      [Validators.email, Validators.pattern(
        "^[a-zA-Z0-9._%+-]+@(?!gmail\\.com$|yahoo\\.com$)[a-zA-Z0-9.-]+\\.(com|org|edu|net|gov|co|in)$"
      )]
    ],
    personalEmail: [
      '',
      [Validators.email, Validators.pattern(
        '^(?!.*[<>])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
      )]
    ]
  })
}
login()
{
  console.log("login clicked")
}
ngAfterViewInit(): void {
    this.labelement.nativeElement.style.backgroundColor = 'green';
}
}
