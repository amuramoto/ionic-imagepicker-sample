import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import {GalleryPage} from '../gallery/gallery';
 
@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public openGallery (): void {
    let options = {
      maximumImagesCount: 15,
      width: 500,
      height: 500,
      quality: 75
    }

    ImagePicker.getPictures(options).then(
      file_uris => this.navCtrl.push(GalleryPage, {images: file_uris}),
      err => console.log('uh oh')
    );
  }

}

