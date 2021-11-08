import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IFilme } from '../models/iFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';
  listVideos: IFilme[] = [
    {
      nome: 'Eternos',
      lancamento: '15/11/2021',
      duracao: '2h 35m',
      classificacao: 80,
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      image: 'https://www.themoviedb.org/t/p/w440_and_h660_face/eDHOutMxLMgComnVhUK0Xfwunu5.jpg'
    },
    {
      nome: 'Venon 2 ',
      lancamento: '07/10/2021',
      duracao: '1h 37m',
      classificacao: 76,
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5UzYZquMwO9FVn15R2eK2itmHu.jpg'
    }
  ];

  constructor(public alertController: AlertController) {}

  async exibirAlertFavorit() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Message <strong>Deseja Favoritar o Filme?</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
