import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QulificationsService } from 'src/app/Services/Qulifications.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-master-register',
  templateUrl: './master-register.component.html',
  styleUrls: ['./master-register.component.css'] ,
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
export class MasterRegisterComponent implements OnInit {
  MasterType : any = [];
  selectedYear: number = 0;
  years: number[] = [];
  signUpForm : FormGroup ;
  fromData : FormData;
  ssd :any ;
  constructor(private service : QulificationsService , private formBuilder: FormBuilder ,  private route : Router) {

    this.ssd = localStorage.getItem("ssd");
    this.signUpForm = this.formBuilder.group({
      MasterType: ['', Validators.required],
      CollageGrade: ['', Validators.required],
      graduteYear: ['', Validators.required],
      GradutePrencetage : ['', Validators.required],
      SSD: [this.ssd, Validators.required],
    });
    this.fromData = new FormData();
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= this.selectedYear-100; year--) {
      this.years.push(year);
    }
   }



  ngOnInit(): void {

    this.service.getfacultyofQulification().subscribe(
      data=>{this.MasterType = data} ,
      err=> console.log(err)
    );

  }

  onSubmit()
  {
     this.service.MasterRegister(this.signUpForm.value).subscribe(
       data=> {
            console.log(data) ,
            this.service.UploadMasterPhoto(this.fromData , this.ssd).subscribe(
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
