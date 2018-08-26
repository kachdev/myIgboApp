import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  url: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    var item = navParams.get('item');

    var playlistUrl = 'https://www.youtube.com/embed/videoseries?list=' + item.playlistId;

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(playlistUrl);
  }
}
