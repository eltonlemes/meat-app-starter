import { Component, Input, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;
  avaliacao: any;

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
    this.avaliacao = 5;
  }

  calcula_avaliacao(nota) {
    var porcentagem = (nota * 100)/this.avaliacao;
    var img = "assets/img/reactions/";

    if(porcentagem > 50) {
      img = img + "loved.png";
    }

    if(porcentagem == 50) {
      img = img + "soso.png";
    }

    if(porcentagem < 50) {
      img = img + "pissed.png";
    }
    
    return img;
  }

}
