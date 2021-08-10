import { QulificationsService } from './../../../Services/Qulifications.service';
import { PostGradutesInfo } from './../../../Model/PostGradutesInfo';
import { PostGradutesService } from './../../../Services/PostGradutes.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-PostGraduteInfo',
  templateUrl: './PostGraduteInfo.component.html',
  styleUrls: ['./PostGraduteInfo.component.css'],
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
  ]),
]

})
export class PostGraduteInfoComponent implements OnInit {

  PostGradute! : PostGradutesInfo  ;
  PostGraduteDiploma : any;
  PostGraduteMaster : any ;
  PostGradutePhd : any;
  QulificationType : any ;

  constructor(private GetPhdPostGraduteservice : PostGradutesService ,
              private QalificationdService : QulificationsService ,
              public dialog: MatDialog ,
              private router : Router ) {
  }
  SavePDF()
  {

  }
  ngOnInit() {
    let ssd = localStorage.getItem("ssd");

    this.GetPhdPostGraduteservice.getPostGraduteInfo(ssd).subscribe(
     ( Postdata)=>{this.PostGradute = Postdata ;} ,
      err=> console.log(err)
    )

    //for Phd
    this.QalificationdService.GetPhdPostGradute(ssd).subscribe(
      (data : any) => {
        this.PostGradutePhd = data as any[] ;
        console.log(this.PostGradutePhd)
        this.QalificationdService.getfacultyofQulification().subscribe(
          data2 => {
              this.QulificationType = data2;
              for (let item of this.QulificationType) {
                for (let item2 of this.PostGradutePhd)
                {
                  if(item.id == item2.phdType)
                  {
                     item2.phdType = item.name;
                  }
                }
             }
         },
          err => console.log(err)
        )} ,
      err=> console.log(err)
    )

    //for Master
    this.QalificationdService.GetMasterPostGradute(ssd).subscribe(
      (data : any) => {
        this.PostGraduteMaster = data as any[] ;

        this.QalificationdService.getfacultyofQulification().subscribe(
          data2 => {
              this.QulificationType = data2;
              for (let item of this.QulificationType) {
                for (let item2 of this.PostGraduteMaster)
                {
                  if(item.id == item2.masterType)
                  {
                     item2.masterType = item.name;
                  }
                }
             }
         },
          err => console.log(err)
        )} ,
      err=> console.log(err)
    )


    //For Diploma
     //for Master
     this.QalificationdService.GetDiplomaPostGradute(ssd).subscribe(
      (data : any) => {
        this.PostGraduteDiploma = data as any[] ;

        this.QalificationdService.getfacultyofQulification().subscribe(
          data2 => {
              this.QulificationType = data2;
              for (let item of this.QulificationType) {
                for (let item2 of this.PostGraduteDiploma)
                {
                  if(item.id == item2.diplomaType)
                  {
                     item2.diplomaType = item.name;
                  }
                }
             }
         },
          err => console.log(err)
        )} ,
      err=> console.log(err)
    )
  }

  openDialog(index : number , type:number) {
     let Data: any;
    if(type==1)
        Data = this.PostGraduteDiploma[index];
    else if(type == 2)
        Data = this.PostGraduteMaster[index];
    else
       Data = this.PostGradutePhd[index];

    const dialogRef = this.dialog.open(DialogContentDialog , {
      data: {
        PostGradute: this.PostGradute ,
        Data : Data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public createProfilePath = (path : string) => {
    return 'http://luxor.edu.eg:8098/'+path;
  }

  public logout ()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('ssd');
    this.router.navigate(['/PostGraduteLogin']);
  }
}



@Component({
  selector: 'dialog-content-dialog',
  templateUrl: 'dialog-content.html',
})
export class DialogContentDialog {

   baseUrl : string = 'http://luxor.edu.eg:8098';
   constructor(@Inject(MAT_DIALOG_DATA) public data: any)
   {

   }


}

