import { Aurelia, inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

const config = {
	baseUrl: 'http://www.mocky.io/v2/',
	loginUrl: '560122ef9635789e120aa366',
	tokenName: 'ah12h3'
};

@inject(Aurelia, HttpClient)
export default class AuthService {

	session = null

	constructor(Aurelia, HttpClient) {
		HttpClient.configure(http => {
	      	http.withBaseUrl(config.baseUrl);
    	});

		this.http = HttpClient;
		this.app = Aurelia;

		this.session = JSON.parse(localStorage[config.tokenName] || null);
	}

	login(username, password) {
        this.http
        	.post(config.loginUrl, { username, password })
        	.then((response) => response.content)
        	.then((session) => {

	    		// save to token
	    		localStorage[config.tokenName] = JSON.stringify(session);

	    		// save to session 
	    		this.session = session;

	    		// set root
	    		this.app.setRoot('app');
	    	})
	}

	logout() {

		// clear from token
		localStorage[config.tokenName] = null;

		// clear from session
		this.session = null;

		// set root
		this.app.setRoot('login')
	}
	
	isAuthenticated() {
		return this.session !== null;
	}

	can(permission) {
		return true; // why not?
	}
}