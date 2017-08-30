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
	//usernamej;
	//passwordj;
	token;

  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
  }

 loginForm() {
 	let username = this.username;
 	let password = this.password;
 	//let usernamej = JSON.stringify(this.username);
 	//let passwordj = JSON.stringify(this.password);
 	console.log(this.username);
 	console.log(this.password);

  	this.authServ.login(this.username, this.password).subscribe(token => {
  		this.token = token.Token;
  	 //this.authServ.test().subscribe(token => {
  	 //	this.token = token.Token;
  	});
  	console.log(this.token);
  }

}
