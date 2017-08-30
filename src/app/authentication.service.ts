import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
	url;
	url2;
 	username:string;
 	password:string;

  constructor(private http: Http) {
  	console.log('auth service has loaded')
  	//this defines the basic url to be sent to the login service
  	//this.url = 'http://ionxlive.net/api2/api/Login?email='+this.username+'&password='+this.password;

  	this.url2 = 'http://ionxlive.net/api2/api/Login?email=JamesMarshall&password=p@ssword';
  }

  login(username, password) {
  	let url = this.url = 'http://ionxlive.net/api2/api/Login?email='+this.username+'&password='+this.password;
  	return this.http.get(this.url)
  	.map(response => response.json());

  }

    test() {
  	return this.http.get(this.url2)
  	.map(response => response.json());
}
}