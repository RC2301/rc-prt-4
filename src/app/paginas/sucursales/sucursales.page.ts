import { DeclareVarStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sucursales',
  templateUrl: 'sucursales.page.html',
  styleUrls: ['sucursales.page.scss'],
})
export class SucursalesPage {
  constructor(public alertCtrl: AlertController) { }
  async lasNaves() {
    const alert = await this.alertCtrl.create({
      header: 'Las Naves',
      subHeader: 'Ventanas',
      message: `Nuestro local esta ubicado en el Canton Las Naves, se encuentra en la Av. Gil Aviles, 
      cerca del BanEcuador del Canton Las Naves.
      <img src="../assets/media/m1.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async aguasNegras() {
    const alert = await this.alertCtrl.create({
      header: 'Aguas Negras',
      subHeader: 'Cuyabeno',
      message: `Nuestro local esta ubicado en la Parroquia Aguas Negras, se encuentra en la Via Pto. El Carmen, 
      a 50 metros del Redondel de Aguas Negras.
      <img src="../assets/media/m3.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async lagoAgrio() {
    const alert = await this.alertCtrl.create({
      header: 'Lago Agrio',
      subHeader: 'Nueva Loja',
      message: `Nuestro local esta ubicado en la Ciudad de Lago Agrio, frente al parque central de esta.
      <img src="../assets/media/m2.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
}
