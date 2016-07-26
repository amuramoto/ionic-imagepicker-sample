import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

	imageSrc: string;

  constructor(private navCtrl: NavController) {

  }

  private openGallery (): void {

    let cameraOptions = {
    	quality: 100,      
      targetWidth: 1000,
      targetHeight: 1000,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: Camera.EncodingType.JPEG,      
      correctOrientation: true
    }

    Camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri, 
				err => console.log(err)
			);   
	}

}

