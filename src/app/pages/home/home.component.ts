import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productDetails:any;
  public products:any;

  public getproductDetails(product:any){
    console.log(product);
    this.productDetails=product;
  }

  constructor(public apiService:ApiService){
    this.apiService.getproducts().subscribe((productResponse)=>{
      console.log(productResponse)
      this.products=productResponse.data
    });
  }}
