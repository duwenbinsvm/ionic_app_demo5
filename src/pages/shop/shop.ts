import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  public id;
  public aid;
  public title;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.id=this.navParams.get('id');
    this.aid=this.navParams.get('aid');
    this.title=this.navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

}
