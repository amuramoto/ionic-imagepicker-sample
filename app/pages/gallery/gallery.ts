import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/gallery/gallery.html',
})
export class GalleryPage {

	private images: Array<string>;	

  
  constructor(private _navCtrl: NavController, private _navParams: NavParams) {
  	this.images = this._navParams.get('images');

  }

}