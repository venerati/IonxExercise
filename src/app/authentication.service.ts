import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
	private token:string;
	url;
	private username:'JamesMarshall';
	private password:'p@ssword';

  constructor(private http: Http) {
  	console.log('auth service has loaded')
  	//this defines the basic url to be sent to the login service
  	this.url = 'http://ionxlive.net/api2/api/Login?email='+this.username+'&password='+this.password;
  }

  login(username, password) {
  	return this.http.get(this.url)
  	.map(response => response.json());

  }

}
