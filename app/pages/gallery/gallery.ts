import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/gallery/gallery.html',
})
export class GalleryPage {

	private images: Array<string>;	
	private rows: Array<Array<string>>;
  
  constructor(private _navCtrl: NavController, private _navParams: NavParams) {
  	this.images = this._navParams.get('images');
  	this.rows = Array(Math.ceil(this.images.length/2));
  }

  ionViewLoaded() {
  	
  	var rowNum = 0;
  	
  	for (var i = 0; i < this.images.length; i+=2) {
  		this.rows[rowNum] = Array(2);
  		if (this.images[i]) {
  			this.rows[rowNum][0] = this.images[i]
  		}
  		if (this.images[i+1]) {
  			this.rows[rowNum][1] = this.images[i+1]
  		}
  		
  	
  		rowNum++;
  	}
  		
  }

}