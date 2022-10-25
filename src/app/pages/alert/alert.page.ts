import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }



  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      subHeader:'this is important!',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          handler:()=>{
          console.log('accion cancelada');
          },
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler:()=>{
            console.log('back page');
          }
        },
      ],
    });

    await alert.present();
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      subHeader:'this is important!',
      message:'this is an alert message',
      buttons: [{
        text:'ok',
        handler:()=>{
          console.log('click in ok!');
        }
      },
    {
      text:'cancelar',
      role:'cancel',
      cssClass:'rojo'
    }],
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'First name',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Second name',
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'more info',
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever',
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal',
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log('Confirm Ok');
            console.log(data);
          },
        },
      ],
    });

    await alert.present();
  }


}
