import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {

  constructor(
    private menuController: MenuController
  ) { }

  cerrarMenu() {
    this.menuController.close();
  }

}
