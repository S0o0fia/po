import { QulificationsService } from './../../../Services/Qulifications.service';
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-Qulifications',
  templateUrl: './Qulifications.component.html',
  styleUrls: ['./Qulifications.component.css'] ,
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
export class QulificationsComponent implements OnInit {

  public selectedIndex : number = 0;
  constructor(private service : QulificationsService) { }
  Data : any = [];
  checked : boolean = false;
  ngOnInit() {
  }

  public getArchCondition(type : number)
  {
       this.service.getArchConditions().subscribe(
         (data : any )=>{
           let result = data[0] as any

           if(type == 0)
              this.Data = result.Diploma

          else if (type == 1 )
               this.Data = result.Master

          else
             this.Data = result.Phd
         } ,
         err=>console.log(err)
       )

       this.selectedIndex++;
       localStorage.setItem("type" , type.toString());
 }


 public toursitcondition(type:number)
 {
  this.service.getTousConditions().subscribe(
    (data : any )=>{
      let result = data[0] as any

      if(type == 0)
         this.Data = result.Diploma

     else if (type == 1 )
          this.Data = result.Master

     else
        this.Data = result.Phd
    } ,
    err=>console.log(err)
  )

  this.selectedIndex++;
  localStorage.setItem("type" , type.toString());
 }

 public getFineartConditions(type : number)
 {
  this.service.getFineartConditions().subscribe(
    (data : any )=>{
      let result = data[0] as any

      if(type == 0)
         this.Data = result.Diploma

     else if (type == 1 )
          this.Data = result.Master

     else
        this.Data = result.Phd
    } ,
    err=>console.log(err)
  )

  this.selectedIndex++;
  localStorage.setItem("type" , type.toString());
 }
 public back()
 {
   this.selectedIndex--;
 }
 public checkedme()
 {
   this.checked = true;
 }
}
