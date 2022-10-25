import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      subHeader: 'Example subheader',
      backdropDismiss:false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon:'trash',
          cssClass:'rojo',
          handler:()=>{
            console.log('Delete');
          },
        },
        {
          text: 'Share',
          icon:'share-outline',
          handler:()=>{
            console.log('share clicked');
          },
        },
        {
          text: 'Cancel',
          icon:'trash',
          handler:()=>{
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          handler:()=>{
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle-outline',
          handler:()=>{
            console.log('Play clicked');
          },
        },
      ],
    });

    await actionSheet.present();

  }

}
