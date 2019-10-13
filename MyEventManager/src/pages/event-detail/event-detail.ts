import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the EventDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'event-detail'
})
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  public currentEvent: any;
  public guestName: string = '';
  public guestPicture: null;
  //public eventPrice:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventProvider: EventProvider, public cameraPlugin: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  ionViewDidEnter() {

    this.eventProvider.getEventDetail(this.navParams.get('eventId'))
      .then(eventSnap => {
        this.currentEvent = eventSnap;
      });
  }

  addGuest(guestName) {
    this.eventProvider.addGuest(guestName, this.currentEvent.id,
      this.currentEvent.price, this.guestPicture)
      .then(() => {
        this.guestName = '';
        this.guestPicture = null;
      });
  }

  takePicture(){
    this.cameraPlugin.getPicture({
      quality: 95,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: this.cameraPlugin.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.guestPicture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

}
