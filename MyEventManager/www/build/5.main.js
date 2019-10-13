webpackJsonp([5],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_detail__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailPageModule", function() { return EventDetailPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventDetailPageModule = (function () {
    function EventDetailPageModule() {
    }
    return EventDetailPageModule;
}());
EventDetailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__event_detail__["a" /* EventDetailPage */]
        ]
    })
], EventDetailPageModule);

//# sourceMappingURL=event-detail.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EventDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventDetailPage = (function () {
    //public eventPrice:number;
    function EventDetailPage(navCtrl, navParams, eventProvider, cameraPlugin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventProvider = eventProvider;
        this.cameraPlugin = cameraPlugin;
        this.guestName = '';
    }
    EventDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventDetailPage');
    };
    EventDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.eventProvider.getEventDetail(this.navParams.get('eventId'))
            .then(function (eventSnap) {
            _this.currentEvent = eventSnap;
        });
    };
    EventDetailPage.prototype.addGuest = function (guestName) {
        var _this = this;
        this.eventProvider.addGuest(guestName, this.currentEvent.id, this.currentEvent.price, this.guestPicture)
            .then(function () {
            _this.guestName = '';
            _this.guestPicture = null;
        });
    };
    EventDetailPage.prototype.takePicture = function () {
        var _this = this;
        this.cameraPlugin.getPicture({
            quality: 95,
            destinationType: this.cameraPlugin.DestinationType.DATA_URL,
            sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: this.cameraPlugin.EncodingType.PNG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            _this.guestPicture = imageData;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    return EventDetailPage;
}());
EventDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'event-detail'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-event-detail',template:/*ion-inline-start:"/Users/prasadkompella/Desktop/Everything/Ionic/MyEventManager/src/pages/event-detail/event-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Event Deatiails</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <h2 class="marg">\n      Current Revenue\n    </h2>\n  <ion-row>\n    \n    <ion-col col-4 [class.profitable]="currentEvent?.revenue > 0" [class.no-profit]="currentEvent?.revenue < 0">\n      {{currentEvent?.revenue}}\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header class="marg1">\n      {{currentEvent?.name}}\n    </ion-card-header>\n    <ion-card-content class="marg1">\n      <p>Ticket: <strong>Rs.{{currentEvent?.price}}</strong></p>\n      <p>Date: <strong>{{currentEvent?.date}}</strong></p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="add-guest-form">\n    <ion-card-header class="marg1">\n      Add Guests\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-lines>\n        <ion-item>\n          <ion-label stacked class="marg1">Name</ion-label>\n          <ion-input [(ngModel)]="guestName" type="text" placeholder="What\'s your guest\'s name?"></ion-input>\n        </ion-item>\n        <span *ngIf="guestPicture">Picture taken!</span>\n\n        <button ion-button color="primary" outline (click)="takePicture()" class="but">\n          Take a Picture\n        </button>\n\n        <button ion-button color="primary" outline (click)="addGuest(guestName)" class="but">\n                                                      Add Guest\n        </button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/prasadkompella/Desktop/Everything/Ionic/MyEventManager/src/pages/event-detail/event-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], EventDetailPage);

//# sourceMappingURL=event-detail.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map