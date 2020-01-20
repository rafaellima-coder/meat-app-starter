import { MEAT_API } from './../../app.pai';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}
  restaurants(): Observable<Restaurant[]> {
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json());
   }

}
