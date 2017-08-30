import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
	username: string;
	password: string;

  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
  }

 // userLogin(e) {
  	//console.log('userLogin has fired')
  	// this.username = e.target.elements[0].value;
  	// this.password = e.target.elements[1].value;
  	// console.log(this.username, this.password);
  	// console.log("set");
  //}

}
