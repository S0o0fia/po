import { PostGradutesService } from './../../../Services/PostGradutes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {trigger,state,style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-PostGraduteLogin',
  templateUrl: './PostGraduteLogin.component.html',
  styleUrls: ['./PostGraduteLogin.component.css'] ,
  animations:[
    trigger('slideRight', [
    transition(':enter', [
      style({ transform: 'translateX(50%)', opacity: 0 }),
      animate('750ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateX(50%)', 'opacity': 0 }))
    ])
  ]) ,

  trigger('slideLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-50%)', opacity: 0 }),
      animate('750ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ]),

    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0ms ease-in', style({ transform: 'translateX(-50%)', 'opacity': 0 }))
    ])
  ])
]
})
export class PostGraduteLoginComponent implements OnInit {

  LoginForm : FormGroup;
  constructor(private service : PostGradutesService , private formBuilder : FormBuilder , private route : Router) {
    this.LoginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Paasword: ['', Validators.required]
    })
  }

  ngOnInit() {
  }


  onSubmit()
  {
    this.service.PostGraduteLogin(this.LoginForm.value).subscribe(
         ( data : any) =>
          {
             localStorage.setItem('token' , data.token)
             localStorage.setItem('ssd' , data.ssd)
             this.route.navigate(['/PostGraduteProfile']);
          },
          err=>
          {
            console.log(err)
          }
    )
  }

}
