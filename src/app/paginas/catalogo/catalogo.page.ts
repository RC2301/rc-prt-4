import { DeclareVarStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-catalogo',
  templateUrl: 'catalogo.page.html',
  styleUrls: ['catalogo.page.scss'],
})

export class CatalogoPage {
  constructor(public alertCtrl: AlertController,public actionSheetController: ActionSheetController) { }
  async hot() {
    const alert = await this.alertCtrl.create({
      header: 'CELULAR INFINIX HOT 11S 6GB RAM, 128GB MEMORIA INTERNA',
      subHeader: '$250,95',
      message: `Dimensiones 16,89 x 7,7 x 0,88 cm.</br>
      Peso 205 gramos.</br>
      Pantalla 6.78 pulgadas, LCD IPS, 1080 × 2480 Píxeles (399 ppi).</br>
      Sistema operativo Android 11.</br>
      Procesador: MediaTek Helio G88 (2x2,0 GHz Cortex-A75 y 6x1,8 GHz Cortex-A55).</br>
      RAM 6 GB</br>
      Almacenamiento 128 GB.</br>
      Ranura para tarjeta SD.</br>
      Cámara trasera: Triple 50 MP, f / 1.6, (ancho), PDAF; 2 MP, (profundidad).</br>
      Cámara frontal: Única 8 MP, f / 2.0, (panorámica).</br>
      Batería 5000 mAh, no extraíble.</br>
      Conectividad 4G, Bluetooth, WiFi, GPS.</br>
      Dual SIM.</br>
      Sensor de huella digital, sensor de proximidad, acelerómetro y brújula.</br></br>
      <img src="../assets/media/hot 11s1.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async hp() {
    const alert = await this.alertCtrl.create({
      header: 'Laptop HP AMD Ryzen 7, 8gb, 256gb, 15pulg',
      subHeader: '$943,95',
      message: `Sistema Operativo: Microsoft Windows 10. </br>
      Procesador: AMD Ryzen 7 4700U (2,0 GHz, hasta 4,1 GHz, 8 MB de caché L3, 8 núcleos). </br>
      Almacenamiento: SSD PCIe NVMe M.2 de 256 GB. </br>
      Memoria RAM: SDRAM DDR4-3200 de 8 GB (2 x 4 GB). </br>
      Gráficos AMD Radeon Integrados. </br>
      Sin unidad óptica. </br>
      Pantalla de 15,6 "en diagonal, FHD (1920 x 1080), </br>
      IPS, microborde, BrightView, 250 nits. </br>
      Puertos: 1 velocidad de señalización SuperSpeed USB Type-C de 10 Gbps </br>
      (suministro de energía USB, DisplayPort 1.4, HDMI 1.4, HP Sleep and Charge) </br>
      (con procesador AMD Athlon Gold); </br>
      1 velocidad de señalización SuperSpeed USB Type-C de 10 Gbps </br>
      (suministro de energía USB, DisplayPort 1.2, HDMI 2.0, HP Sleep and Charge) </br>
      (con procesador AMD Ryzen 3/5/7); </br>
      1 combinación de auriculares y micrófono. </br>
      Cámara HD HP Wide Vision de 720p con micrófonos digitales de matriz dual integrados. </br>
      Audio: Audio de B&O; Altavoces duales; </br>
      Potenciador de audio HP. </br>
      Conectividad: Combinación de Intel Wi-Fi 6 AX 200 (2x2) y </br>
      Bluetooth 5 (compatible con velocidades de transferencia de archivos Gigabit). </br>
      Batería prismática de iones de litio de 3 celdas y 41 Wh. </br>
      Dimensiones: 14,18 x 9,21 x 0,70 pulgadas.</br></br>
      <img src="../assets/media/hp1.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async impresora() {
    const alert = await this.alertCtrl.create({
      header: 'Impresora térmica de bolsillo',
      subHeader: '$26,25',
      message: `IMAGEN REFERENCIAL. DISTINTOS COLORES DISPONIBLES, DESPACHAREMOS SEGÚN STOCK. </br>
      Es una impresora de fotos inteligente multifuncional y portátil, puede imprimir fotos, 
      etiquetas, pegatinas, mensajes, listas, registros, código QR, etc. </br>
      Mantiene el control en el trabajo e imprime tus notas para organizar tus tareas o etiquetar cualquier cosa que desees. </br>
      La impresora tiene un cuerpo muy pequeño y ligero, con diseño de tamaño de palma que puedes llevarla a cualquier lugar. </br>
      Gracias a la tecnología de calor, no se utiliza tinta y no hay costes innecesarios. </br>
      Conecta cualquier tipo de smartphone fácil y rápidamente con la impresora de bolsillo a través de Bluetooth en unos segundos. </br>
      Sigue la guía de usuario de la impresora portátil inalámbrica para descargar la aplicación relativa en tus dispositivos.</br></br>
      <img src="../assets/media/impresora1.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async lp() {
    const alert = await this.alertCtrl.create({
      header: 'Laptop Acer Gateway Ryzen 5, 256gb, 16gb, 15pulg, huella',
      subHeader: '$672,00',
      message: `Sistema Operativo: Microsoft Windows 10. </br>
      Procesador: AMD RYZEN 5 3450U, QUAD CORE 2,1 GHz – 3,5 GHz. </br>
      Almacenamiento: SSD 256 GB. </br>
      Memoria RAM: 16 GB. </br>
      Gráficos AMD RADEON VEGA 8 Integrados. </br>
      Sin unidad óptica. </br>
      Pantalla 15,6″ IPS LCD, 1920 x 1080 píxeles. </br>
      Cámara web con micrófonos integrados. </br>
      Puertos: HDMI x 1, USB C x 1, USB 3.0 x 2, AURICULARES x 1. </br>
      Conectividad: WIFI 802,11 b/g/n. </br>
      Dimensiones: 376 x 244 x 20 mm.</br></br>
      <img src="../assets/media/lp1.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async moga() {
    const alert = await this.alertCtrl.create({
      header: 'Game Pad MOGA Pro Power',
      subHeader: '$7,35',
      message: `Controlador de juego móvil Android de alta precisión; </br>
      Controlador de juego totalmente portátil con palos analógicos duales, activadores de hombro y cuatro botones de acción; </br>
      Descargas gratuitas de Sonic CD y PAC-MAN de Namco incluidas con la compra; </br>
      MOGA Pivot App le permite explorar todos los juegos de MOGA en una práctica aplicación: </br>
      su teléfono entra instantáneamente, hasta 3.2 in./82 mm, </br>
      los teléfonos más grandes del mercado, o retrocede y funciona en su tableta; </br>
      Funciona con teléfonos inteligentes y tabletas Android 2.3+ con Bluetooth; </br>
      Incluye el controlador MOGA, la aplicación MOGA Pivot , MOGA Soft Case, código de oferta de Sonic CD; </br>
      Teléfono y tableta se venden por separado; </br>
      Requiere 2 pilas AAA (no incluidas)</br></br>
      <img src="../assets/media/moga1.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async msi() {
    const alert = await this.alertCtrl.create({
      header: 'Laptop MSI Gaming, Core i7 10ma, 512gb, 16gb, RTX 2060 6GB, PRO',
      subHeader: '$1.993,95',
      message: `Sistema Operativo: Microsoft Windows 10 Pro. </br>
      Procesador Intel® Core ™ i7-10875H de hasta décima generación. </br>
      Almacenamiento: 512 GB de memoria flash de estado sólido. </br>
      Memoria RAM: 16 GB DDR4, 3200 MHz. </br>
      Sin unidad óptica. NVIDIA GeForce RTX 2060. </br>
      Pantalla 17.3 "FHD (1920 x 1080), 240 Hz, nivel IPS. </br>
      Batería integrada de 82 WHr. </br>
      Conectividad: 802.11 ax Wi-Fi 6 + Bluetooth v5.1. </br>
      Puertos: 1x RJ45; 1x Micro SD; 1 x HDMI (4K a 60 Hz); </br>
      1x Type-C (USB3.2 Gen2 / DP / Thunderbolt ™ 3) con carga PD; </br>
      3 puertos USB3.2 Gen1 tipo A; 1x Tipo C (USB3.2 Gen2 / DP) </br>
      Dimensiones: 396.1 x 259.4 x 20.25 mm. </br>
      Cámara Tipo WEBCAM IR HD (30 fps @ 720p).</br></br>
      <img src="../assets/media/msi1.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async nokia() {
    const alert = await this.alertCtrl.create({
      header: 'Celular Nokia 110 dual sim',
      subHeader: '$25,19',
      message: `Hasta 14 horas de tiempo de conversación con una sola carga y recarga con un cable micro USB.</br>
      Hecho de policarbonato resistente, con forma para adaptarse cómodamente a tu mano.</br>
      Escucha tu propia música o sintoniza las emisoras de radio locales.</br>
      Precargado con un juego completo de serpiente, además de juegos de prueba y compra.</br>
      Convierte momentos en recuerdos duraderos con una foto o vídeo capturados desde la cámara trasera.</br>
      Marca Nokia</br>
      Color Negro</br>
      Capacidad de almacenamiento de memoria 32 GB</br>
      Tamaño de pantalla 1.8 Pulgadas</br>
      Tecnología celular 2G</br>
      Fabricante HMD Global Oy</br>
      Otras características de la cámara Rear</br>
      Tecnología de conectividad USB</br>
      Factor de forma Bar</br>
      Tiempo de conversación telefónica</br></br>
      <img src="../assets/media/nokia1.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async note9() {
    const alert = await this.alertCtrl.create({
      header: 'Xiaomi Redmi Note 9 128gb Dual Sim',
      subHeader: '$228,89',
      message: `Dimensiones 162.3 x 77.2 x 8.9 mm</br>
      Peso 199 gr.</br>
      Pantalla LCD 6.53’’.</br>
      Resolución 1080 x 2340.</br>
      Densidad de Pixeles 395 ppi</br>
      Gorilla Glass 5</br>
      Procesador MediaTek Helio G85 octa-core 2GHz</br>
      Almacenamiento 128 GB.</br>
      RAM 4 GB.</br>
      Ampliación por MicroSD.</br>
      Cámara trasera: Cuádruple, 48 MP (f/1.8, PDAF, wide) + 8 MP (f/2.2, ultrawide) + 2 MP (f/2.4, macro) + 2 MP (f/2.4, profundidad)</br>
      Cámara frontal: 13 MP, f/2.3, 1080p, HDR</br>
      Batería no extraíble de 5020 mAh.</br>
      Sistema operativo Android 10 MIUI 11</br>
      Conectividad 4G, WiFi, Bluetooth, GPS, NFC</br>
      Dual SIM.</br>
      Incluye reconocimiento facial, lector de huellas, acelerómetro, proximidad, giroscopio y brújula digital.</br></br>
      <img src="../assets/media/note91.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async pova2() {
    const alert = await this.alertCtrl.create({
      header: 'Celular tecno pova 2 6gb, 128gb',
      subHeader: '$246,75',
      message: `Dimensiones 173,3 x 78,8 x 9,6 mm.</br>
      Pantalla 6.9 pulgadas, IPS LCD, 1080 × 2460 Píxeles (389 ppi).</br>
      Sistema operativo Android 11, HIOS 7.6.</br>
      Procesador: MediaTek Helio G85, ocho núcleos (2x2,0 GHz Cortex-A75 y 6x1,8 GHz Cortex-A55).</br>
      RAM 6 GB</br>
      Almacenamiento 128 GB.</br>
      Ranura para tarjeta SD.</br>
      Cámara trasera: cuádruple 48 MP, f / 1.9, (ancho), PDAF; 2 MP, (macro); 2 MP, (profundidad); 2 MP, (profundidad).</br>
      Cámara frontal: 8 MP, f / 2.0.</br>
      Batería 7000 mAh, no extraíble.</br>
      Conectividad 4G, Bluetooth 5.0, WiFi, GPS.</br>
      Dual SIM.</br>
      Sensor de huella digital lateral, proximidad, acelerómetro, y brújula electrónica.</br></br>
      <img src="../assets/media/pova 21.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async sd() {
    const alert = await this.alertCtrl.create({
      header: 'Micro sd SanDisk 128gb Ultra',
      subHeader: '$22,05',
      message: `Velocidad de transferencia de hasta 80 MB/s </br>
      Carga aplicaciones más rápido con clase de rendimiento A1 Uhs </br>
      Clase de velocidad U1 y Clase de velocidad 10 para grabación y reproducción de vídeo Full HD </br>
      Compatible con dispositivos microSDHC y microSDXC</br></br>
      <img src="../assets/media/sd1.jpg" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['Cerrar']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Favoritos',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
