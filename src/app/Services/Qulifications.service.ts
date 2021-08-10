import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhdModel } from '../Model/PhdModel';

@Injectable({
  providedIn: 'root'
})
export class QulificationsService {

//this must change when you make deploy
BaseUrl :string = 'http://luxor.edu.eg:8098/api';
//header options
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'})

};


constructor(private https : HttpClient) { }

//get Condition ArchDiploma

public getArchConditions ()
{
  return this.https.get('assets/LocalData/archconditions.json');
}



public getTousConditions ()
{
  return this.https.get('assets/LocalData/toursitcondition.json');
}


public getFineartConditions ()
{
  return this.https.get('assets/LocalData/fineartcondition.json');
}


public getfacultyofQulification ()
{
  return this.https.get('assets/LocalData/facultiesofQulification.json');
}


public PhdRegister (data : PhdModel)
{
  let url = '/PostGradutePhd/PhdRegister';
  console.log(data)
  return this.https.post<PhdModel>(this.BaseUrl+url , data , this.httpOptions );
}

public MasterRegister (data : any)
{
  let url = '/PostGraduteMaster/MasterRegister';
  console.log(data)
  return this.https.post<PhdModel>(this.BaseUrl+url , data , this.httpOptions );
}

public DiplomaRegister (data : any)
{
  let url = '/PostGraduteDiploma/DiplomaRegister';
  console.log(data)
  return this.https.post<PhdModel>(this.BaseUrl+url , data , this.httpOptions );
}




public UploadPhdPhoto(formData : FormData , SSD : string)
{
  let url = '/PostGradutePhd/UploadPhdPhoto?SSD='+SSD;
  return this.https.post(this.BaseUrl+url , formData);
}

public UploadMasterPhoto(formData : FormData , SSD : string)
{
  let url = '/PostGraduteMaster/UploadMasterPhoto?SSD='+SSD;
  return this.https.post(this.BaseUrl+url , formData);
}


public UploadDiplomaPhoto(formData : FormData , SSD : string)
{
  let url = '/PostGraduteDiploma/UploadDiplomaPhoto?SSD='+SSD;
  return this.https.post(this.BaseUrl+url , formData);
}



public GetPhdPostGradute (ssd : any)
{
  let url = '/PostGradutePhd/GetPhdPostGradute?SSD='+ssd;

  return this.https.get(this.BaseUrl+url);
}


public GetMasterPostGradute (ssd : any)
{
  let url = '/PostGraduteMaster/GetMasterPostGradute?SSD='+ssd;

  return this.https.get(this.BaseUrl+url);

}


public GetDiplomaPostGradute (ssd : any)
{
  let url = '/PostGraduteDiploma/GetDiplomaPostGradute?SSD='+ssd;

  return this.https.get(this.BaseUrl+url);

}

}
