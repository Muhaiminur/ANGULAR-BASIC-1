import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Idataabir } from './abirdata';
import { Observable }from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AbirdataserviceService {

  private url: string ="https://raw.githubusercontent.com/rudroanik/Gallery-Image-picker_like_facebook/master/image_url.json";

  //private url: string ="https://raw.githubusercontent.com/rudroanik/Gallery-Image-picker_like_facebook/master/ie_url.json";
  constructor(private http: HttpClient) { }

  getabirdata() {
    return [
      { "id": 1, "name": "abir1", "age": 17 },
      { "id": 2, "name": "abir2", "age": 17 },
      { "id": 3, "name": "abir3", "age": 17 },
      { "id": 4, "name": "abir4", "age": 17 },
      { "id": 5, "name": "abir5", "age": 17 }
    ];
  }
  getabirurldata(): Observable <Idataabir[]> {
    return this.http.get<Idataabir[]>(this.url)
    .catch(this.errorHandler);
  }
  errorHandler(err: HttpErrorResponse){
    return Observable.throw(err.message || "GTECH ERROR");
  }
  
}
