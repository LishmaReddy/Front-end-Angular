import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-pri-cal',
  templateUrl: './bike-pri-cal.component.html',
  styleUrls: ['./bike-pri-cal.component.css']
})
export class BikePriCalComponent implements OnInit {
  vehical_model = '';
  vehical_age = '';
  vehical_price= '';
  total=null;


  IDV: number = 0;
  primimum: number = 0;
  showroomprice: number = 0;
  dp: number = 0;
  ODP: number = 0;
  NCB: number = 0;

  ODprimimum: number = 0;

  PAccidentCover: number = 100;
  liabilityPaid: number = 50;
  TPCover: number = 1110;
  netprimimum: number = 0;
  GST: number = 0;
  total_primimum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  CarpriCal() {
    //  if (2022-(+this.vehical_age) > 1 ) {
      
      
       this.dp =  parseInt(this.vehical_model,10) * 0.2;
       // alert(parseInt(((+this.vehical_age));
        this.IDV = parseInt(this.vehical_model,10) - this.dp;
        this.ODP = this.IDV * 0.019;
        this.NCB = this.ODP * 0.20;
        this.ODprimimum = this.ODP - this.NCB;
        alert("OD Primimum:" +this.ODprimimum);
        this.netprimimum = this.ODP + this.PAccidentCover + this.liabilityPaid + this.TPCover;
        
        this.total_primimum= this.netprimimum * 0.18 + this.netprimimum;
        alert(" total net Primimum "+this.total_primimum);
  
      
     // }
    }
}
