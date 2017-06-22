import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
	cars = ['ford', 'bmw', 'porche'];

	myData () {
		return 'this is my data';
	}
}
