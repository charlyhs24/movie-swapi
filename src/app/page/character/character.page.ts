import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { NavController } from '@ionic/angular';
import { CharacterDetailPage } from '../character-detail/character-detail.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  LIST_OF_CHARACTER: Array<any>;
  constructor(
    private movieService: MovieService,
    private navCtrl: NavController,
    private route: Router) { }
  async LoadCharacter() {
    try {
      const character: any = await this.movieService.getListCharacter('people/').toPromise();
      this.LIST_OF_CHARACTER = character.results;
      console.log(this.LIST_OF_CHARACTER)
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
  detailCharacterHandler(id: any) {
    // this.navCtrl.navigateRoot('character-detail');

    var getId = id.substr(id.length - 2);
    console.log("character url", getId[0])
    // this.route.navigate(['/character-detail', params]);
    this.route.navigate(['/character-detail', getId[0]]);
  }
  ngOnInit() {
    this.LoadCharacter();
  }

}
