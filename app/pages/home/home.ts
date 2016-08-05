import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import {GalleryPage} from '../gallery/gallery';
 
@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  constructor(private _navCtrl: NavController) {

  }

  private openGallery (): void {
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }

    ImagePicker.getPictures(options).then(
      file_uris => this._navCtrl.push(GalleryPage, {images: file_uris}),
      err => console.log('uh oh')
    );
	}

}

