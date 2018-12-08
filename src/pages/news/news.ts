import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http, Jsonp } from '@angular/http';

import { NewscontentPage } from '../newscontent/newscontent';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  // list to store data
  public list=[];
  public NewscontentPage=NewscontentPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public jsonp: Jsonp) {
    
    var that=this;
    var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&pag';
    this.http.get(url).subscribe(function(data){
      // console.log(data['_body']);

      that.list=JSON.parse(data['_body']).result;
      // console.log(JSON.parse(data['_body']));
    },function(err){

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
