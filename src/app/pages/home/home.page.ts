import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titles = {
  name: 'Prestar',
  people: 'Personas'
  };

  constructor(private navCtrl: NavController) {}


  goToForm(){
    this.navCtrl.navigateForward('/form-data');
  }

}
