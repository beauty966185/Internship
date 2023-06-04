import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  public getproducts():Observable<any>{
    return this.http.get(`${environment.SERVER_URL}/products.json`);
  
    }
    
  }

