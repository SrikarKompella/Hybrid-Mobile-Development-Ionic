import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  zone:NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.zone=new NgZone({});
    firebase.initializeApp({
    apiKey: "AIzaSyB8b0XpKGHckEZoVSL-dIXGn8RthnX8qEY",
    authDomain: "ionictest-6267e.firebaseapp.com",
    databaseURL: "https://ionictest-6267e.firebaseio.com",
    projectId: "ionictest-6267e",
    storageBucket: "ionictest-6267e.appspot.com",
    messagingSenderId: "256205632831"
  });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    this.zone.run( () => {
    if (!user) {
      this.rootPage = 'login';
      unsubscribe();
    } else { 
      this.rootPage = HomePage;
      unsubscribe();
    }
    });     
  });

  }
}

