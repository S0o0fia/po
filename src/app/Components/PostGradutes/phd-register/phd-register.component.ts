import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QulificationsService } from 'src/app/Services/Qulifications.service';

@Component({
  selector: 'app-phd-register',
  templateUrl: './phd-register.component.html',
  styleUrls: ['./phd-register.component.css'] ,
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
export class PhdRegisterComponent implements OnInit {

  PhdType : any = [];
  selectedYear: number = 0;
  years: number[] = [];
  public signUpForm: FormGroup ;
  public fromData : FormData;
  ssd : any ;
  constructor(private service : QulificationsService , private formBuilder: FormBuilder ) {

    this.ssd = localStorage.getItem("ssd");
    this.signUpForm = this.formBuilder.group({
      phdtype: ['', Validators.required],
      MasterGrade: ['', Validators.required],
      MasterYear: ['', Validators.required],
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
      data=>{this.PhdType = data} ,
      err=> console.log(err)
    );

  }

  public phdfile(event : any)
  {
    if (event.length === 0) {
      return;
    }

    let fileToUpload = event.target.files[0];
    this.fromData.append('MasterCertifcateFile', fileToUpload, fileToUpload.name);
  }

  public onSubmit()
  {
    this.service.PhdRegister(this.signUpForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.service.UploadPhdPhoto(this.fromData , this.ssd).subscribe(
          data=> {
             localStorage.removeItem('type');
            console.log(data)
          },
          err=>console.log(err))
      },
      err=>console.log(err)
    )
  }

}
