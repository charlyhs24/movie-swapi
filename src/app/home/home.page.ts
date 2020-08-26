import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  LIST_OF_MOVIE: Array<any>;
  constructor(
    private movieService: MovieService,
    public navCtrl: NavController) { }
  async LoadMovie() {
    try {
      const movie: any = await this.movieService.getMovie('films/').toPromise();
      this.LIST_OF_MOVIE = movie.results;
      console.log(this.LIST_OF_MOVIE)
    } catch (error) {
      console.log(error)
    }
  }
  navRootPage() {
    this.navCtrl.navigateRoot("character");
  }
  navFilms() {
    this.navCtrl.navigateRoot("home");
  }
  ngOnInit() {
    console.log("hello")
    this.LoadMovie();
  }
}
