import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'reset-password'
})
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public resetPasswordForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public authProvider: AuthProvider,
    public formBuilder: FormBuilder, public alertCtrl: AlertController) {
        this.resetPasswordForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, 
            EmailValidator.isValid])],
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  resetPassword(){
  if (!this.resetPasswordForm.valid){
    console.log(this.resetPasswordForm.value);
  } else {
    this.authProvider.resetPassword(this.resetPasswordForm.value.email)
    .then((user) => {
      let alert = this.alertCtrl.create({
        message: "We just sent you a reset link to your email",
        buttons: [
          {
            text: "Ok",
            role: 'cancel',
            handler: () => { this.navCtrl.pop(); }
          }
        ]
      });
      alert.present();

    }, (error) => {
      var errorMessage: string = error.message;
      let errorAlert = this.alertCtrl.create({
        message: errorMessage,
        buttons: [{ text: "Ok", role: 'cancel' }]
      });
      errorAlert.present();
    });
  }
}
}




