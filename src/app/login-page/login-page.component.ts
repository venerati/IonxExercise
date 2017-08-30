import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
	info: {

	username: string;
	password: string;

	}

	formUsername:string;
	formPassword:string;
	token:string;
	infoSubmit:any;

  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
  }

 loginForm() {

 	let	info = {
		username: this.formUsername,
		password: this.formPassword,
	}

	let infoSubmit = JSON.stringify(info);
	console.log(infoSubmit);

  	this.authServ.login(this.infoSubmit.username, this.infoSubmit.password).subscribe(token => {
  		this.token = token.Token;
  	 //this.authServ.test().subscribe(token => {
  	 //	this.token = token.Token;
  	});
  	console.log(this.token);
  }

}
