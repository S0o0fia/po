import { FormGroup } from '@angular/forms';
import { PostGradutesInfo } from './../Model/PostGradutesInfo';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostGradutesService {

  //this must change when you make deploy
BaseUrl :string = 'http://luxor.edu.eg:8098/api';
//header options
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'})

};

constructor( private http:HttpClient) { }

public PostGraduteLogin (data : any)
{
  console.log(data)
   let url = '/PostGradutes/PostGraduteLogin';
   return this.http.post(this.BaseUrl+url , data);
}
public AddPostGradute (data : any )
{
  let url = '/PostGradutes/AddNewPostGradute';
  return this.http.post(this.BaseUrl+url , data , this.httpOptions );
}

public UploadPostGradutesPhotos(formData : FormData , SSD : string)
{
  let url = '/PostGradutes/UploadPhoto?SSD='+SSD;
  return this.http.post(this.BaseUrl+url , formData);
}
public getPostGraduteInfo (ssd :any)
{
  let url = '/PostGradutes/GetPostGradute?id='+ssd;
  return this.http.get<any>(this.BaseUrl+url);
}

public getUniversties ()
{
 return this.http.get('assets/LocalData/Univeristies.json');
}


public getColleges()
  {
    return this.http.get('assets/LocalData/Collages.json');
  }


public getBithPlcae()
{
  return this.http.get('assets/LocalData/BirthPlace.json');
}

public getEgyptGovernate()
{
   return this.http.get('assets/LocalData/EgyptGovernate.json');
}




}
