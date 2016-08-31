import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/gallery/gallery.html',
})
export class GalleryPage {

  images: Array<string>;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.images = this.navParams.get('images');
  }

}