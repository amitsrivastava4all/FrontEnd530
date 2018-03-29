import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import {Item} from '../models/Item';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MyService{
  constructor(private http:Http){

  }
  callServer():Promise<Item[]>{
    var url:string = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    return this.http.get(url).toPromise().then((response)=>{
      return response.json().mobiles as Item[];
  }).catch((error)=>{
    console.error('An error occurred', error);
  return Promise.reject(error.message || error);
  });
  }
  getData():string{


    return 'This is the data coming from the Service.......';
  }
}
