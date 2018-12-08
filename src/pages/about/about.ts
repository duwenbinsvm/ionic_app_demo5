import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ShopPage} from '../shop/shop';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public list=[];
  constructor(public navCtrl: NavController) {

    for(var i=0;i<10;i++){
      this.list.push('This is ${i} NO.');
    }
  }

  goShop(index, item){
    // alert(index);
    this.navCtrl.push(ShopPage,{
      id:index,
      aid: 234,
      title: item
    });
  }
}
