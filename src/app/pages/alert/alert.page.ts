import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string = "";

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlert() {
    const alert = this.alertCtrl.create({
      header: "Título del Alert",
      subHeader: "Subtítulo del Alert",
      message: "Esto es una alerta",
      buttons: [{
        text: "Cancel",
        role: "cancel",
        cssClass: "secondary",
        handler: () =>{
          console.log("Cancelar pulsar");
        }
      }]
    });
  }

  mostrarNombre() {

  }
}
