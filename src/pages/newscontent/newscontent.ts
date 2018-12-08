import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Jsonp} from '@angular/http';

/**
 * Generated class for the NewscontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newscontent',
  templateUrl: 'newscontent.html',
})
export class NewscontentPage {

  public list={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public jsonp: Jsonp) {

    console.log(this.navParams.get('aid'));
    let aid=this.navParams.get('aid');
    this.requestContent(aid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewscontentPage');
  }

  requestContent(aid){
    var url='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid+'&callback=JSONP_CALLBACK';
    this.jsonp.get(url).subscribe((data)=>{
      console.log(data);
      this.list=data['_body'].result[0];
      
    },function(err){

    });
  }
}
