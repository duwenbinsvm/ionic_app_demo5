import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage} from '../product/product';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public NewsPage=NewsPage;
  
  constructor(public navCtrl: NavController) {

  }

goProduct(){
  this.navCtrl.push(ProductPage);
}



}
