import { PostGraduteRegisterComponent } from './Components/PostGradutes/PostGraduteRegister/PostGraduteRegister.component';
import { PostGraduteLoginComponent } from './Components/PostGradutes/PostGraduteLogin/PostGraduteLogin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostGraduteInfoComponent, DialogContentDialog } from './Components/PostGradutes/PostGraduteInfo/PostGraduteInfo.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';;
import { MatFileUploadModule } from 'angular-material-fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient  } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { QulificationsComponent } from './Components/PostGradutes/Qulifications/Qulifications.component';
import { DiplomaRegisterComponent } from './Components/PostGradutes/diploma-register/diploma-register.component';
import { MasterRegisterComponent } from './Components/PostGradutes/master-register/master-register.component';
import { PhdRegisterComponent } from './Components/PostGradutes/phd-register/phd-register.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { PrintRequestComponent } from './Components/PostGradutes/print-request/print-request.component';
@NgModule({
  declarations: [
    AppComponent,
    PostGraduteRegisterComponent ,
    PostGraduteLoginComponent ,
     QulificationsComponent,
     DiplomaRegisterComponent,
     MasterRegisterComponent,
     PhdRegisterComponent ,
     PostGraduteInfoComponent,
     DialogContentDialog ,
     PrintRequestComponent


],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule ,
    MatTabsModule ,
    MatIconModule ,
    FlexLayoutModule,
    MatSelectModule ,
    MatDatepickerModule ,
    MatNativeDateModule ,
    MatFileUploadModule ,
    MatListModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
