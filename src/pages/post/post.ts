import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  private post;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
    console.log(this.post);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
