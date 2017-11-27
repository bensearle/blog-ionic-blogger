import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants'
import { PostPage } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  posts: any[];
  constructor(private constants: ConstantsProvider, private http: Http, public navCtrl: NavController) {
    http.get('https://www.googleapis.com/blogger/v3/blogs/byurl?key=' + constants.getApiKey() + '&url=' + constants.getUrl())
      .subscribe(response => {
        let data = response.json();
        this.title = data.name;
        this.getPosts(data.posts.selfLink);
      });
  }

  getPosts(url: string) {
    this.http.get(url + '?key=' + this.constants.getApiKey())
      .subscribe(response => {
        let data = response.json();
        this.posts = data.items;
      });
  }

  openPost(post) {
    this.navCtrl.push(PostPage, {post: post})
  }
}
