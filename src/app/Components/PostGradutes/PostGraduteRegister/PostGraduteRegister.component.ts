import { PostGradutesService } from './../../../Services/PostGradutes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-PostGraduteRegister',
  templateUrl: './PostGraduteRegister.component.html',
  styleUrls: ['./PostGraduteRegister.component.css'] ,
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
export class PostGraduteRegisterComponent implements OnInit {

 public signUpForm: FormGroup ;
 public Universties: any = [];
 public Colleges: any = [];
 public BirthPlace: any = [];
 public EgyptGovernate : any = [];
 public selectedIndex: number = 0 ;
 public formData : FormData;
 @Output() public onUploadFinished = new EventEmitter();

 constructor(private formBuilder: FormBuilder , private service : PostGradutesService , private router : Router ) {
  this.formData = new FormData();
  this.signUpForm = this.formBuilder.group({
    namear: ['', Validators.required],
    nameen: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    phone: ['', Validators.required],
    ssd: ['', Validators.required],
    issuerSSD: ['', Validators.required],
    gender: ['', Validators.required],
    nationality: ['', Validators.required],
    religion: ['', Validators.required],
    job: ['', Validators.required],
    birthPlace: ['', Validators.required],
    birthDate: ['', Validators.required],
    address: ['', Validators.required],
    milirityStatus: ['', Validators.required],
    university: ['', Validators.required],
    collage: ['', Validators.required],
    department: ['', Validators.required],
    ssdFile: [null],
    milirtyFile: [null],
    photo: [null],
    birthCertificate: [null],
    approveAffairFile: [null],
    acknowledmentFile: [null],
    acknowledmentJobFile: [null],
  });
}


      ngOnInit() {
    //get the Universties list
    this.service.getUniversties().subscribe(
      data=> this.Universties  = data  ,
      err=> console.log(err)
   );



   //get bithPlace
   this.service.getBithPlcae().subscribe(
     data=> this.BirthPlace = data ,
     err=> console.log(err)
   )

   //get Egypt Governate
   this.service.getEgyptGovernate().subscribe(
    data=> this.EgyptGovernate = data ,
    err=> console.log(err)
  )

   //get Egypt Colleges
   this.service.getColleges().subscribe(
    data=> this.Colleges = data ,
    err=> console.log(err)
  )

  }


   //get file intput change
   ssdFile(event1 :any)
   {
      const ssdFile = (event1.target.files[0] as HTMLInputElement);
      this.signUpForm.patchValue({
       ssdFile: ssdFile
       });
   }



   //for next button
   nextStep()
  {
    this.selectedIndex++;
  }

   //for pervious button
  previousStep()
  {
    this.selectedIndex--;


  }

  //for SSD File
  public SSDFile = (files : any) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = files.target.files[0];
    this.formData.append('SSDFile', fileToUpload, fileToUpload.name);
  }

  //For Military File
  public MilirtyFile = (files : any) =>{
    if (files.length === 0) {
      return;
    }

    let fileToUpload = files.target.files[0];
    this.formData.append('MilirtyFile', fileToUpload, fileToUpload.name);
  }

  // for Approve affair file
  public ApproveAffairFile = (files : any) =>
  {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = files.target.files[0];
    this.formData.append('ApproveAffairFile', fileToUpload, fileToUpload.name);
  }


//for birth Certificate file
  public BirthCertificate = (files : any)=>
  {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = files.target.files[0];
    this.formData.append('BirthCertificate', fileToUpload, fileToUpload.name);
  }

  //for personal photo
  public Photo = (files : any) =>
  {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = files.target.files[0];
    this.formData.append('Photo', fileToUpload, fileToUpload.name);
  }

  // for Acknowledge file
   public AcknowledmentFile = (files : any) =>
   {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = files.target.files[0];
    this.formData.append('AcknowledmentFile', fileToUpload, fileToUpload.name);
   }


   //for Acknowledge job file
   public AcknowledmentJobFile = (files: any)=>
   {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = files.target.files[0];
    this.formData.append('AcknowledmentJobFile', fileToUpload, fileToUpload.name);
   }



   //when form get submitted
  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }



    this.service.AddPostGradute(this.signUpForm.value).subscribe(
      data=>{
           let ssdnumber : string =  this.signUpForm.controls["ssd"].value;
           this.service.UploadPostGradutesPhotos(this.formData , ssdnumber).subscribe(
              (data : any)=>{
                  localStorage.setItem("ssd" , data.ssd) ;
                  localStorage.setItem('token' , data.token);

                  let QlificationType  = localStorage.getItem('type');
                  if(QlificationType == '0')
                     this.router.navigate(['/DiplomaRegister'])
                  else if (QlificationType == '1')
                       this.router.navigate(['/MasterRegister'])
                  else
                       this.router.navigate(['/PhdRegister'])

               },
               err => console.log(err) );
        },
      err=> console.log(err)
    );

    }
}


