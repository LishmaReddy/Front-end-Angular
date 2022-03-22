import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {
  
 
  login: Login = new Login();
  
  constructor(private alogin:LoginserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  userLogin() {
    this.alogin.loginUser(this.login).subscribe((res) => {
      // alert(JSON.stringify(res))
      if (res.status == true) {
        sessionStorage.setItem('customerId', String(res.customerId));
        sessionStorage.setItem('customerName', res.customerName);
        this.router.navigate(['dashboard']);
      }
    });
  }
  

}
