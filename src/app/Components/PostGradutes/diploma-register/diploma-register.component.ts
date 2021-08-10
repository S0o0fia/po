import { QulificationsService } from './../../../Services/Qulifications.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-diploma-register',
  templateUrl: './diploma-register.component.html',
  styleUrls: ['./diploma-register.component.css'] ,
  animations:[
    trigger('slideRight', [
    transition(':enter', [
      style({ transform: 'translateX(70%)', opacity: 0 }),
      animate('800ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateX(70%)', 'opacity': 0 }))
    ])
  ]) ,

  trigger('slideLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-70%)', opacity: 0 }),
      animate('800ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateX(-70%)', 'opacity': 0 }))
    ])
  ])
]
})
export class DiplomaRegisterComponent implements OnInit {

  DiplomaType : any = [];
  selectedYear: number = 0;
  years: number[] = [];
  signUpForm : FormGroup ;
  fromData : FormData;
  ssd :any ;
  constructor(private service : QulificationsService , private formBuilder: FormBuilder ,  private route : Router) {

    this.ssd = localStorage.getItem("ssd");
    this.signUpForm = this.formBuilder.group({
      diplomaType: ['', Validators.required],
      collageGrade: ['', Validators.required],
      graduteYear: ['', Validators.required],
      gradutePrencetage : ['', Validators.required],
      SSD: [this.ssd, Validators.required],
    });
    this.fromData = new FormData();
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= this.selectedYear-100; year--) {
      this.years.push(year);
    }
   }ngOnInit(): void {

    this.service.getfacultyofQulification().subscribe(
      data=>{this.DiplomaType = data} ,
      err=> console.log(err)
    );

  }

  onSubmit()
  {
     this.service.DiplomaRegister(this.signUpForm.value).subscribe(
       data=> {
            console.log(data) ,
            this.service.UploadDiplomaPhoto(this.fromData , this.ssd).subscribe(
              data=> {
                 localStorage.removeItem('type');
                this.route.navigate(['/PostGraduteProfile']);
              },
              err=>console.log(err))

       } ,
       err=>console.log(err)
     )
  }

  public CollageCertificateFile(event : any)
  {
    if (event.length === 0) {
      return;
    }

    let fileToUpload = event.target.files[0];
    this.fromData.append('CollageCertificateFile', fileToUpload, fileToUpload.name);
  }

  public StatementGradesFile(event : any)
  {
    if (event.length === 0) {
      return;
    }

    let fileToUpload = event.target.files[0];
    this.fromData.append('StatementGradesFile', fileToUpload, fileToUpload.name);
  }

}
