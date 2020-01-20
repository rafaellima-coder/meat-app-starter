import { RestaurantsService } from './restaurant/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];
  constructor(private restaturantService: RestaurantsService) { }

  ngOnInit() {
    this.restaturantService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants);
  }

}
