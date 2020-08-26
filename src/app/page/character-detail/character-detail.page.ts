import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  id: any;
  DETAIL_CHARACTER: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private navCtrl: NavController) {
    const sub = this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id)
    });
  }
  navRootPage() {
    this.navCtrl.navigateRoot("character");
  }
  navFilms() {
    this.navCtrl.navigateRoot("home");
  }
  async LoadDetailCharacter() {
    try {
      const character: any = await this.movieService.getDetailCharacter(`people/${this.id}/`).toPromise();
      console.log("hcs")
      console.log(character)
      this.DETAIL_CHARACTER = character;
    } catch (error) {
      console.log(error)
    }
  }
  ngOnInit() {
    this.LoadDetailCharacter()
  }

}
