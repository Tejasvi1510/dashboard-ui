import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl="http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getRecords()
  {
    return this.http.get(this.baseUrl+`/getData`);
  }
  public getDataByRegion()
  {
    return this.http.get(this.baseUrl+`/getByRegion`);  
  }
 //get data by filter
 public getDataByFilter(filterName:any,data:any)
 {  
    return this.http.get(this.baseUrl+`/getDataBy/${filterName}/${data}`);
 }
  //filter data yearwise
  public filterYearwise(data:any)
  {
    return this.http.get(this.baseUrl+`/filterByYear/${data}`);
  }
}
